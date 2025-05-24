import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: 'lucide:layout-template',
    title: 'Template Premium',
    description: 'Pilih dari berbagai template undangan digital dengan desain elegan dan modern'
  },
  {
    icon: 'lucide:edit',
    title: 'Mudah Dipersonalisasi',
    description: 'Sesuaikan teks, foto, dan detail acara dengan mudah sesuai kebutuhan Anda'
  },
  {
    icon: 'lucide:smartphone',
    title: 'Responsif di Semua Perangkat',
    description: 'Tampilan yang sempurna di desktop, tablet, dan smartphone'
  },
  {
    icon: 'lucide:share-2',
    title: 'Mudah Dibagikan',
    description: 'Bagikan undangan digital Anda melalui WhatsApp, email, atau media sosial'
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-content2">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">Mengapa Memilih Kami</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Kami menyediakan solusi undangan digital terbaik untuk momen spesial Anda
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardBody className="flex flex-col items-center text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon icon={feature.icon} className="text-primary" width={24} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground-600">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};