import React from 'react'
import Hero from '../components/Hero'
import FeaturedProperty from '../components/featuredProperties'
import Howitworks from '../components/Howitworks'
import Listings from '../components/Listings'
import Agent from '../components/Agent'
import LatestNews from '../components/latestNews'
import TestimonialWrapper from "../components/TestimonialWrapper"
import Ready from "../components/Ready"
import Footer from "../components/layout/Footer";
const Home = () => {
  return (
    <div>
    <Hero />
    <div className="my-16">
    <FeaturedProperty />
    </div>
    <div className="mt-16">
        <Howitworks />
      </div>
      <div className="mt-16">
        <Listings/>
      </div>
      <div className="mt-16" >
        <Agent/>
      </div>
      <div className="mt-16">
        <LatestNews/>
      </div>
      <div className="mt-16">
        <TestimonialWrapper/>
      </div>
      <div className="my-16">
        <Ready/>
      </div>
      <div className="">
        <Footer/>
      </div>
    </div>
  );
};



export default Home