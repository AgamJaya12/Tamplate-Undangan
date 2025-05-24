import React from 'react';
import { Banner } from '../Component/Banner';
import { FeaturedTemplates } from '../Component/FeatureTamplate';
import { FeaturesSection } from '../Component/FeatureSection';
import { Testimonials } from '../Component/Testimonials';
import { CTASection } from '../Component/CTASecition';

export const HomePage = () => {
  return (
    <>
      <Banner />
      <FeaturedTemplates />
      <FeaturesSection />
      <Testimonials />
      <CTASection />
    </>
  );
};