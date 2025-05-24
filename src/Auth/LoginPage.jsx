import React, { useEffect, useState } from 'react';
import { Card, CardBody, Input, Button, Divider, Checkbox } from '@heroui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useSignIn, useUser } from '@clerk/clerk-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const { signIn, setActive, isLoaded } = useSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { isSignedIn } = useUser();

  useEffect(() => {
    if (!isLoaded) return; // Tunggu hingga Clerk SDK dimuat
    if (isSignedIn) {
      navigate('/');
    }
    // Log untuk debugging redirect OAuth
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('code')) {
      console.log('OAuth callback detected, code:', urlParams.get('code'));
    }
  }, [isSignedIn, isLoaded, navigate]);

  console.log('isSignedIn:', isSignedIn, 'isLoaded:', isLoaded);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;
    setIsLoading(true);
    setErrorMsg('');

    try {
      const response = await signIn.create({
        identifier: email,
        password,
      });

      await setActive({ session: response.createdSessionId });
      navigate('/');
    } catch (err) {
      console.error('Login error:', err);
      const message = err.errors?.[0]?.message || 'Email atau Password Salah';
      setErrorMsg(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthSignIn = async (strategy) => {
    if (!isLoaded) return;
    setIsLoading(true);
    try {
      await signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: '/', // Ganti dengan URL callback Clerk jika diperlukan
        redirectUrlComplete: '/',
      });
    } catch (err) {
      console.error('OAuth error:', err.errors || err);
      setErrorMsg(err.errors?.[0]?.message || 'Gagal masuk dengan OAuth. Silakan coba lagi.');
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background min-h-[calc(100vh-64px)] py-12 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="font-heading text-3xl font-semibold mb-2">Masuk ke Akun Anda</h1>
            <p className="text-foreground-600">
              Selamat datang kembali! Silakan masuk untuk melanjutkan
            </p>
          </div>

          <Card>
            <CardBody className="p-6">
              <form onSubmit={handleLogin}>
                <div className="space-y-4 mb-6">
                  <Input
                    label="Email"
                    placeholder="email@example.com"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onValueChange={setEmail}
                    isRequired
                    startContent={<Icon icon="lucide:mail" className="text-foreground-400" width={18} />}
                  />

                  <Input
                    label="Password"
                    placeholder="Masukkan password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onValueChange={setPassword}
                    isRequired
                    startContent={<Icon icon="lucide:lock" className="text-foreground-400" width={18} />}
                  />

                  <div className="flex justify-between items-center">
                    <Checkbox isSelected={rememberMe} onValueChange={setRememberMe}>
                      Ingat saya
                    </Checkbox>

                    <Button
                      as={RouterLink}
                      to="/forget-password"
                      variant="light"
                      color="primary"
                      className="p-0 font-normal"
                    >
                      Lupa password?
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  color="primary"
                  className="w-full"
                  size="lg"
                  isLoading={isLoading}
                  isDisabled={!email || !password || !isLoaded}
                >
                  Masuk
                </Button>

                {errorMsg && (
                  <p className="text-sm text-red-500 mt-2 text-center">{errorMsg}</p>
                )}
              </form>

              <div className="mt-6">
                <div className="relative my-4 flex items-center justify-center">
                  <Divider />
                  <span className="absolute bg-content1 px-2 text-foreground-500">atau</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    onClick={() => handleOAuthSignIn('oauth_google')}
                    variant="flat"
                    startContent={<Icon icon="logos:google-icon" width={18} />}
                    className="w-full"
                    isLoading={isLoading}
                    isDisabled={isLoading || !isLoaded}
                  >
                    Google
                  </Button>

                  <Button
                    onClick={() => handleOAuthSignIn('oauth_facebook')}
                    variant="flat"
                    startContent={<Icon icon="logos:facebook" width={18} />}
                    className="w-full"
                    isLoading={isLoading}
                    isDisabled={isLoading || !isLoaded}
                  >
                    Facebook
                  </Button>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-foreground-600">
                  Belum punya akun?{' '}
                  <Button
                    as={RouterLink}
                    to="/register"
                    variant="light"
                    color="primary"
                    className="p-0 font-normal"
                  >
                    Daftar sekarang
                  </Button>
                </p>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;