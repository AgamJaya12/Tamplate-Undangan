import React from 'react';
import { Button } from '@heroui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { TemplateCard } from './template-card';
// import { featuredTemplates } from '../data/templates';

export const FeaturedTemplates = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">Template Populer</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Pilih dari koleksi template undangan pernikahan digital kami yang elegan dan modern
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* {featuredTemplates.map((template, index) => (
            <TemplateCard 
              key={template.id} 
              template={template} 
            />
          // ))} */}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            as={RouterLink} 
            to="/catalog" 
            color="primary" 
            variant="flat" 
            size="lg"
          >
            Lihat Semua Template
          </Button>
        </div>
      </div>
    </section>
  );
};