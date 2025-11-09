import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Testimonials from '../../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <HowItWorks></HowItWorks>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;