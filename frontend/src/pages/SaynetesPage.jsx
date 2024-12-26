import React from 'react';
import {
    SaynetesLanguagesSection,
    SaynetesAvailableSection,
    SaynetesSection,
} from "../sections";
import Layout from '../components/UI/Layout';

const SaynetesPage = () => {
    return (
        <Layout>
            <main className='relative'>
                <SaynetesSection />
            </main>
        </Layout>
    )
}

export default SaynetesPage