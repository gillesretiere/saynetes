import React, { useState, useEffect, useContext, } from 'react';
import { useNavigate } from 'react-router-dom';
import { json_data } from '../assets/data/index.js';
import Navbar from "./Navbar";
import HeroSection from '../sections/HeroSection';
import ProblemSection from '../sections/ProblemSection';
import { SolutionSection } from '../sections';
import PractitionerGuide from '../sections/PractitionerGuide';
import { AppShowcase } from '../sections';
import ImpactSection from '../sections/ImpactSection';
import TeamSection from '../sections/TeamSection';
import FooterSection from '../sections/FooterSection';

// --- COMPOSANT PRINCIPAL ---
export default function LandingPage() {
    const navigate = useNavigate();
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const loadData = () => JSON.parse(JSON.stringify(json_data));
        setLanguages(loadData);
    }, []);

    return (
        <div className="antialiased selection:bg-[rgb(var(--color-primary))] selection:text-white">
            <Navbar />
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <AppShowcase />
            <PractitionerGuide />
            <ImpactSection />
            <TeamSection />
            <FooterSection />
        </div>
    );
}