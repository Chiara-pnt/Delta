import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Feature';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';


//Hero Feature Contnt Carousel

function Home() {
  return (
    <>
    <Hero />
    <Features />
    <Content {...heroOne} />
    <Content {...heroTwo} />
    <Content {...heroThree} />
    <Carousel />
  </>
  );
};

export default Home;