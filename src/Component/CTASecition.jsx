import React from 'react';
import { Button } from '@heroui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section className="py-16 bg-primary/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Siap Membuat Undangan Digital Anda?
          </h2>
          <p className="text-foreground-600 text-lg mb-8">
            Pilih template, personalisasi, dan bagikan undangan pernikahan digital Anda dengan mudah
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              as={RouterLink} 
              to="/catalog" 
              color="primary" 
              size="lg"
              className="font-medium"
            >
              Lihat Katalog Template
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
      </div>
    </section>
  );
};