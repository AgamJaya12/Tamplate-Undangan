import React from 'react';
import { Link } from '@heroui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const Footer = () => {
  return (
    <footer className="bg-content2 py-12 border-t border-divider">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-primary mb-4">Wedvite</h3>
            <p className="text-foreground-600 mb-4">
              Buat undangan pernikahan digital yang elegan dan personal untuk momen spesial Anda.
            </p>
            <div className="flex space-x-4">
              <Link href="#" isExternal aria-label="Instagram">
                <Icon icon="lucide:instagram" className="text-foreground-600 hover:text-primary" width={20} />
              </Link>
              <Link href="#" isExternal aria-label="Facebook">
                <Icon icon="lucide:facebook" className="text-foreground-600 hover:text-primary" width={20} />
              </Link>
              <Link href="#" isExternal aria-label="Twitter">
                <Icon icon="lucide:twitter" className="text-foreground-600 hover:text-primary" width={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <Link as={RouterLink} to="/" color="foreground" className="hover:text-primary">
                  Beranda
                </Link>
              </li>
              <li>
                <Link as={RouterLink} to="/catalog" color="foreground" className="hover:text-primary">
                  Katalog Template
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" className="hover:text-primary">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" className="hover:text-primary">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" color="foreground" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" className="hover:text-primary">
                  Cara Pemesanan
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" className="hover:text-primary">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" className="hover:text-primary">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" className="text-primary" width={16} />
                <Link href="mailto:info@wedvite.com" color="foreground" className="hover:text-primary">
                  info@wedvite.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:phone" className="text-primary" width={16} />
                <Link href="tel:+6281234567890" color="foreground" className="hover:text-primary">
                  +62 812-3456-7890
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:map-pin" className="text-primary" width={16} />
                <span className="text-foreground-600">
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-divider mt-8 pt-8 text-center text-foreground-500">
          <p>&copy; {new Date().getFullYear()} Wedvite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};