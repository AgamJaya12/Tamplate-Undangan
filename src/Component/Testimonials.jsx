import React from 'react';
import { Card, CardBody, Avatar } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Anisa & Budi',
    date: 'Juni 2023',
    text: 'Template undangan digital yang sangat elegan dan mudah digunakan. Tamu undangan kami sangat terkesan dengan desainnya yang cantik.',
    avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=anisa'
  },
  {
    name: 'Dian & Reza',
    date: 'Agustus 2023',
    text: 'Kami sangat puas dengan layanan Wedvite. Proses pembuatan undangan digital sangat mudah dan hasilnya luar biasa.',
    avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=dian'
  },
  {
    name: 'Maya & Andi',
    date: 'Oktober 2023',
    text: 'Terima kasih Wedvite! Undangan digital kami mendapat banyak pujian dari tamu. Fitur RSVP online sangat membantu kami dalam persiapan.',
    avatar: 'https://img.heroui.chat/image/avatar?w=100&h=100&u=maya'
  }
];

export const Testimonials= () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">Testimoni Pelanggan</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Lihat apa kata pelanggan kami tentang pengalaman mereka menggunakan Wedvite
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardBody className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar src={testimonial.avatar} className="mr-4" size="lg" />
                    <div>
                      <h3 className="font-heading text-lg font-medium">{testimonial.name}</h3>
                      <p className="text-foreground-500 text-sm">{testimonial.date}</p>
                    </div>
                  </div>
                  <div className="mb-4 text-warning flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} icon="lucide:star" width={16} />
                    ))}
                  </div>
                  <p className="text-foreground-600">"{testimonial.text}"</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};