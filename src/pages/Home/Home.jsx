import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Testimonials from '../../components/Testimonial/Testimonial';
import PartnerCard from '../../components/PartnerCard/PartnerCard';
import FindPartner from '../../components/FindPartner/FindPartner';

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