import React from 'react';
import HomePage from '../components/HomePage';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import QualificationsSection from '../components/QualificationsSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ProjectSection from '../components/ProjectSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { AboutTitle,SkillsTitle,QualificationsTitle,ServicesTitle,PortfolioTitle,TestimonialsTitle,ContactTitle } from '../components/TitleData';

const Home = () => {


    return (
        <>
            <HomePage />
            <AboutSection {...AboutTitle}/>
            <SkillsSection {...SkillsTitle}/>
            <QualificationsSection {...QualificationsTitle}/>
            <ServicesSection {...ServicesTitle}/>
            <PortfolioSection {...PortfolioTitle}/>
            <ProjectSection />
            <TestimonialSection {...TestimonialsTitle}/>
            <ContactSection {...ContactTitle}/>
            <Footer />
        </>
    );
}

export default Home;
