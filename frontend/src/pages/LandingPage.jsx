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
import DeckContext from '../store/DeckContext.jsx';

// --- COMPOSANT PRINCIPAL ---
export default function LandingPage() {
    let deckContext = useContext(DeckContext);
    const navigate = useNavigate();
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const loadData = () => JSON.parse(JSON.stringify(json_data));
        setLanguages(loadData);
    }, []);



    useEffect(() => {
        const menuItems = [
            { index: 0, label: "Problème", url: "#problem_section", active: true, },
            { index: 1, label: "Solution", url: "#solution_section", active: true, },
            { index: 2, label: "L'App", url: "#app_section", active: true, },
            { index: 3, label: "Guide", url: "#guide_section", active: true, },
            { index: 4, label: "Impact", url: "#impact_section", active: true, },
            { index: 5, label: "Équipe", url: "#equipe_section", active: true, },
        ];
        deckContext.current_deck.navlinks = menuItems;
    }, []);


    const updateNavlinks = (languages) => {
        const arr = [];
        {
            languages && languages.map(
                (el, index) => {
                    let item = {};
                    item["id"] = index;
                    item["label"] = el.lang_name_native;
                    item["url"] = `/theme_page/${el.language}?l=${el.language}`;
                    item["active"] = true;
                    arr.push(item);
                }
            )
        }
        deckContext.current_deck.navlinks = arr;
    }

    const callbackModal = () => {
        updateNavlinks(languages);
    };

    return (
        <div className="antialiased selection:bg-[rgb(var(--color-primary))] selection:text-white">
            <Navbar context={deckContext} />
            <HeroSection callbackModal={callbackModal} />
            <ProblemSection />
            <SolutionSection />
            <AppShowcase />
            <PractitionerGuide callbackModal={callbackModal} />
            {/*
            <ImpactSection />
            */}
            <TeamSection />
            <FooterSection />
        </div>
    );
}