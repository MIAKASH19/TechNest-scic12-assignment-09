import Banner from '@/Components/Banner'
import React from 'react'
import HowItWorks from './../Components/HowItWorks';
import WhychooseUs from '@/Components/WhychooseUs';
import Testimonials from './../Components/Testimonial';
import CTA from '@/Components/CTA';
import Popular from '@/Components/Popular';

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhychooseUs />
      <Popular />
      <HowItWorks/>
      <Testimonials/>
      <CTA />
    </div>
  )
}
