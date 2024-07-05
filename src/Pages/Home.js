// src/pages/Home.js
import React from 'react';
import Header from '../Components/Heder/Header';
import Introduce from '../Components/Introduce/Introduce';
import About from '../Components/About/CAbout';
import Skills from './Skills';

const Home = () => {
  return <div>
    <Header/>
    <Introduce/>
    <About/>
    <Skills/>
   
  </div>;
};

export default Home;
