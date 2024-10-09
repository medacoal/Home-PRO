import React from 'react'
import Hero from '../components/Hero'
import FeaturedProperty from '../components/featuredProperties'
import Howitworks from '../components/Howitworks'
import Listings from '../components/Listings'
import Agent from '../components/Agent'
import TestimonialWrapper from "../components/TestimonialWrapper"
import Testimonials from '../components/Testimonials'
import Ready from "../components/Ready"
import Footer from "../components/layout/Footer";
import LatestNews from '../components/latestNews'

const Home = () => {
  return (
    <div>
    <div className="md:mt-32 mt-14">
    <Hero />
    <FeaturedProperty />
    </div>
        <Howitworks />
        <Listings/>
        <Agent/>
        <LatestNews/>
        <TestimonialWrapper/>
        <Ready/>
        <Footer/>
    </div>
  );
};



export default Home