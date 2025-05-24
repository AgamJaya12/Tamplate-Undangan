import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Input,
  Button,
  Divider,
  Checkbox,
} from '@heroui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useSignUp } from '@clerk/clerk-react';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [verificationCode, setVerificationCode] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    const valid = (
      formData.firstName &&
      formData.lastName &&
      formData.username &&
      formData.email.includes('@') &&
      formData.password &&
      formData.password === formData.confirmPassword &&
      formData.agreedToTerms
    );
    return valid;
  };

  // Handle submission of sign-up form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoaded) return;

    if (!isFormValid()) {
      setErrorMsg('Periksa kembali data Anda.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      // Start the sign-up process using the email and password provided
      await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
        username: formData.username,
      });

      // Send the user an email with the verification code
      await signUp.prepareEmailAddressVerification({
        strategy: 'email_code',
      });

      // Set 'verifying' true to display second form
      // and capture the OTP code
      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
      const msg = err?.errors?.[0]?.message || 'Gagal mendaftar';
      setErrorMsg(msg);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle the submission of the verification form
  const handleVerify = async (e) => {
    e.preventDefault();

    if (!isLoaded) return;

    if (!verificationCode) {
      setErrorMsg('Masukkan kode verifikasi');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      // Use the code the user provided to attempt verification
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      console.log('SignUp attempt result:', JSON.stringify(completeSignUp, null, 2));

      // If verification was completed, set the session to active
      // and redirect the user
      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        
        // Update nama user setelah sign-up berhasil
        try {
          await completeSignUp.createdUser?.update({
            firstName: formData.firstName,
            lastName: formData.lastName,
          });
        } catch (updateErr) {
          console.warn('Failed to update name:', updateErr);
        }
        
        navigate('/');
      } else if (completeSignUp.status === 'missing_requirements') {
        // Handle missing requirements dengan update
        try {
          const updatedSignUp = await signUp.update({
            username: formData.username,
            firstName: formData.firstName,
            lastName: formData.lastName,
          });
          
          console.log('Updated SignUp:', JSON.stringify(updatedSignUp, null, 2));
          
          // Try verification again after update
          const finalSignUp = await signUp.attemptEmailAddressVerification({
            code: verificationCode,
          });
          
          if (finalSignUp.status === 'complete') {
            await setActive({ session: finalSignUp.createdSessionId });
            navigate('/');
          } else {
            setErrorMsg('Masih ada field yang diperlukan');
          }
        } catch (updateErr) {
          console.error('Update error:', updateErr);
          setErrorMsg('Gagal mengupdate data');
        }
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(completeSignUp, null, 2));
        setErrorMsg('Verifikasi belum selesai');
      }
    } catch (err) {
      console.error('Error:', JSON.stringify(err, null, 2));
      
      if (err.errors && err.errors.length > 0) {
        const error = err.errors[0];
        
        if (error.code === 'form_code_incorrect') {
          setErrorMsg('Kode verifikasi salah. Silakan coba lagi.');
        } else if (error.code === 'verification_expired') {
          setErrorMsg('Kode verifikasi sudah kadaluarsa. Silakan minta kode baru.');
        } else {
          setErrorMsg(error.longMessage || error.message || 'Verifikasi gagal');
        }
      } else {
        setErrorMsg('Terjadi kesalahan saat verifikasi. Silakan coba lagi.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background min-h-[calc(100vh-64px)] py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="font-heading text-3xl font-semibold mb-2">
              Buat Akun Baru
            </h1>
            <p className="text-foreground-600">
              Daftar untuk mulai membuat undangan digital Anda
            </p>
          </div>

          <Card>
            <CardBody className="p-6">
              {pendingVerification ? (
                // Display the verification form to capture the OTP code
                <div>
                  <div className="text-center mb-4">
                    <h2 className="text-xl font-semibold">Verifikasi Email</h2>
                    <p className="text-foreground-600">
                      Masukkan kode yang telah dikirim ke email {formData.email}
                    </p>
                  </div>
                  
                  <form onSubmit={handleVerify}>
                    <Input
                      label="Kode Verifikasi"
                      placeholder="Masukkan kode verifikasi"
                      value={verificationCode}
                      onValueChange={setVerificationCode}
                      isRequired
                    />
                    
                    <Button
                      type="submit"
                      color="primary"
                      className="w-full mt-4"
                      isLoading={isLoading}
                    >
                      Verifikasi Email
                    </Button>
                  </form>
                  
                  {errorMsg && (
                    <p className="text-red-500 text-sm mt-2 text-center">
                      {errorMsg}
                    </p>
                  )}
                </div>
              ) : (
                // Display the initial sign-up form to capture the email and password
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Nama Depan"
                        placeholder="John"
                        value={formData.firstName}
                        onValueChange={(val) =>
                          handleInputChange('firstName', val)
                        }
                        isRequired
                      />

                      <Input
                        label="Nama Belakang"
                        placeholder="Doe"
                        value={formData.lastName}
                        onValueChange={(val) =>
                          handleInputChange('lastName', val)
                        }
                        isRequired
                      />
                    </div>

                    <Input
                      label="Username"
                      placeholder="username"
                      value={formData.username}
                      onValueChange={(val) =>
                        handleInputChange('username', val)
                      }
                      isRequired
                      startContent={
                        <Icon
                          icon="lucide:user"
                          className="text-foreground-400"
                          width={18}
                        />
                      }
                    />

                    <Input
                      label="Email"
                      placeholder="email@example.com"
                      type="email"
                      value={formData.email}
                      onValueChange={(val) =>
                        handleInputChange('email', val)
                      }
                      isRequired
                      startContent={
                        <Icon
                          icon="lucide:mail"
                          className="text-foreground-400"
                          width={18}
                        />
                      }
                    />

                    <Input
                      label="Password"
                      placeholder="Buat password"
                      type="password"
                      value={formData.password}
                      onValueChange={(val) =>
                        handleInputChange('password', val)
                      }
                      isRequired
                      startContent={
                        <Icon
                          icon="lucide:lock"
                          className="text-foreground-400"
                          width={18}
                        />
                      }
                    />

                    <Input
                      label="Konfirmasi Password"
                      placeholder="Konfirmasi password"
                      type="password"
                      value={formData.confirmPassword}
                      onValueChange={(val) =>
                        handleInputChange('confirmPassword', val)
                      }
                      isRequired
                      startContent={
                        <Icon
                          icon="lucide:lock"
                          className="text-foreground-400"
                          width={18}
                        />
                      }
                      color={
                        formData.confirmPassword
                          ? formData.password === formData.confirmPassword
                            ? 'success'
                            : 'danger'
                          : 'default'
                      }
                    />

                    <Checkbox
                      isSelected={formData.agreedToTerms}
                      onValueChange={(val) =>
                        handleInputChange('agreedToTerms', val)
                      }
                      isRequired
                    >
                      Saya setuju dengan{' '}
                      <a href="#" className="text-primary">
                        Syarat & Ketentuan
                      </a>{' '}
                      dan{' '}
                      <a href="#" className="text-primary">
                        Kebijakan Privasi
                      </a>
                    </Checkbox>
                  </div>

                  {/* CAPTCHA Widget */}
                  <div id="clerk-captcha"></div>

                  <Button
                    type="submit"
                    color="primary"
                    className="w-full mt-4"
                    size="lg"
                    isLoading={isLoading}
                  >
                    Daftar
                  </Button>

                  {errorMsg && (
                    <p className="text-red-500 text-sm mt-2 text-center">
                      {errorMsg}
                    </p>
                  )}
                </form>
              )}

              <div className="mt-6">
                <div className="relative my-4 flex items-center justify-center">
                  <Divider />
                  <span className="absolute bg-content1 px-2 text-foreground-500">
                    atau
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    variant="flat"
                    startContent={
                      <Icon icon="logos:google-icon" width={18} />
                    }
                    className="w-full"
                    onClick={() =>
                      signUp.authenticateWithRedirect({
                        strategy: 'oauth_google',
                      })
                    }
                  >
                    Google
                  </Button>
                  <Button
                    variant="flat"
                    startContent={<Icon icon="logos:facebook" width={18} />}
                    className="w-full"
                    onClick={() =>
                      signUp.authenticateWithRedirect({
                        strategy: 'oauth_facebook',
                      })
                    }
                  >
                    Facebook
                  </Button>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-foreground-600">
                  Sudah punya akun?{' '}
                  <Button
                    as={RouterLink}
                    to="/login"
                    variant="light"
                    color="primary"
                    className="p-0 font-normal"
                  >
                    Masuk
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