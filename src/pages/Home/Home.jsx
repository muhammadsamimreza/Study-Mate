import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Testimonials from '../../components/Testimonial/Testimonial';
import PartnerCard from '../../components/PartnerCard/PartnerCard';
import FindPartner from '../../components/FindPartner/FindPartner';
import TopPartners from '../../components/TopPartners/TopPartners';
import PartnerDetails from '../../components/PartnerDetails/PartnerDetails';

const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <TopPartners></TopPartners>
           <HowItWorks></HowItWorks>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;