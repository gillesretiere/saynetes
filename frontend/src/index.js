import React, { useState, createContext } from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { ThemeProvider, StyledEngineProvider, } from '@mui/material/styles';

import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import HomePage from './pages/HomePage';
import LanguagePage from './pages/LanguagePage';
import ThemePage from './pages/ThemePage';
import DialogPage from './pages/DialogPage';
import SaynetesPage from './pages/SaynetesPage';
import CartolangPage from './pages/CartolangPage';
import CountryPage from './components/decks/Cartolang/CountryPage';
import CountryLanguagesPage from './components/decks/Cartolang/CountryLanguagesPage';
import { CountryDashboard } from './components/decks/Cartolang/CountryDashboard';
import Home from './pages/Home';
import App from './App';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
Penser à ajuster cette constante avant de faire un build
- true => hammer-marteau.com (VPS2)
- false => saynetes.fr (VPS3)
*/
const pathHMRT = true;

root.render(

  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme} defaultMode="dark">
        <BrowserRouter>
          <CssBaseline />
          <Routes>
            { pathHMRT ? <Route path="/" element={<Home />} /> : <Route path="/" element={<SaynetesPage />} />}
            <Route path="/saynetes_page" element={<SaynetesPage />} />
            <Route path="/language_page" element={<LanguagePage />} />
            <Route path="theme_page/:id" element={<ThemePage />} />
            <Route path="dialog_page/:id" element={<DialogPage />} />
            <Route path="cartolang" element={<CartolangPage />} />
            <Route path="country_page/:id" element={<CountryDashboard />} />
            <Route path="country_languages_page/:id" element={<CountryLanguagesPage />} />
            <Route path="*" element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
                <App/>
              </main>
            } />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  </StyledEngineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
