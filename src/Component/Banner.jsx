import React from 'react';
import { Button } from '@heroui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-content1 banner-gradient">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-foreground">
            Buat Undangan Digital <span className="text-primary">Elegan</span> untuk Momen Spesial Anda
          </h1>
          <p className="text-foreground-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Pilih template premium, personalisasi dengan mudah, dan bagikan kepada tamu undangan Anda dengan satu klik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              as={RouterLink} 
              to="/catalog" 
              color="primary" 
              size="lg"
              className="font-medium"
            >
              Lihat Semua Template
            </Button>
            <Button 
              as={RouterLink} 
              to="/register" 
              variant="flat" 
              color="primary" 
              size="lg"
              className="font-medium"
            >
              Daftar Sekarang
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <img 
              src="https://img.heroui.chat/image/wedding?w=600&h=800&u=banner1" 
              alt="Wedding Invitation Preview" 
              className="rounded-lg shadow-lg mx-auto"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-2/3 rounded-lg overflow-hidden shadow-lg border-4 border-background">
              <img 
                src="https://img.heroui.chat/image/wedding?w=400&h=300&u=banner2" 
                alt="Wedding Invitation Detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute -bottom-12 left-0 right-0 h-24 bg-background transform rotate-1 scale-110 z-10"></div>
    </div>
  );
};