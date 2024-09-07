import React from 'react';
import { Container } from '@mui/material';
import LandingImage from '../components/LandingImage';
import ImageSlider from '../components/ImageSlider';
import CountSection from '../components/CountSection';
import Features from '../components/Features';
import ClientSlider from '../components/ClientSlider';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

function Home() {
  return (
    <Container maxWidth="lg">
      <LandingImage />
      {/* <ImageSlider /> */}
      <CountSection />
      <Features />
      <ClientSlider />
      <FAQ /> 
    </Container>
  );
}

export default Home;
