import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import SubjectsPage from "./components/SubjectsPage";
import ContactPage from "./components/ContactPage";
import AboutMePage from "./components/AboutMePage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header>
            <Routes>
                <Route exact path="/" element={<Home />} index />
                <Route path="/teaching" element={<SubjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about-me" element={<AboutMePage />} />
            </Routes>
      </Header>
  </React.StrictMode>
);

reportWebVitals();
