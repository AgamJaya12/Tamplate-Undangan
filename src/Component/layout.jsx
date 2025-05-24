import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Badge
} from '@heroui/react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Footer } from './Footer';
import { SignIn, useClerk, useUser } from '@clerk/clerk-react';

export const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isSignedIn } = useUser()
  const { signOut } = useClerk();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Simulate cart data
    setCartCount(2);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar maxWidth="xl" className="border-b border-divider">
        <NavbarBrand>
          <Link as={RouterLink} to="/" className="font-heading text-2xl font-semibold text-primary">
            INVITE-AJ
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={location.pathname === '/'}>
            <Link as={RouterLink} to="/" color={location.pathname === '/' ? 'primary' : 'foreground'}>
              Beranda
            </Link>
          </NavbarItem>
          <NavbarItem isActive={location.pathname === '/catalog'}>
            <Link as={RouterLink} to="/catalog" color={location.pathname === '/catalog' ? 'primary' : 'foreground'}>
              Katalog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground">
              Tentang Kami
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground">
              Kontak
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={RouterLink}
              to="/cart"
              variant="light"
              isIconOnly
              aria-label="Cart"
              className="relative"
            >
              <Icon icon="lucide:shopping-cart" width={20} />
              {cartCount > 0 && (
                <Badge content={cartCount} color="primary" size="sm" className="absolute -top-1 -right-1" />
              )}
            </Button>
          </NavbarItem>

          {isSignedIn ? (
            <Dropdown>
              <DropdownTrigger>
                <Button variant="light" isIconOnly aria-label="Account">
                  <Icon icon="lucide:user" width={20} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="User actions">
                <DropdownItem key="account" as={RouterLink} to="/account">
                  Akun Saya
                </DropdownItem>
                <DropdownItem key="setting" as={RouterLink} to="/settings">
                  Setting
                </DropdownItem>
                <DropdownItem 
                  key="sign-out" 
                  onClick={async () => {
                    await signOut();
                    navigate("/");
                  }}
                >
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <div className="flex gap-2">
              <Button as={RouterLink} to="/login" variant="light" size="sm">
                Login
              </Button>
              <Button as={RouterLink} to="/register" color="primary" size="sm">
                Register
              </Button>
            </div>
          )}



          <NavbarItem className="hidden sm:flex">
            <Button as={RouterLink} to="/catalog" color="primary" variant="flat">
              Lihat Template
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};
