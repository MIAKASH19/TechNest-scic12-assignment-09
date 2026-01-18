import Banner from '@/Components/Banner'
import React from 'react'
import HowItWorks from './../Components/HowItWorks';
import WhychooseUs from '@/Components/WhychooseUs';
import Testimonials from './../Components/Testimonial';
import CTA from '@/Components/CTA';
import Popular from '@/Components/Popular';
import FaqSection from '@/Components/FAQ';

export default function Home() {
  return (
    <div>
      <Banner />
      <WhychooseUs />
      <Popular />
      <HowItWorks />
      <Testimonials />
      <FaqSection />
      <CTA />
    </div>
  )
}
