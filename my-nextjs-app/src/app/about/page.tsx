"use client";
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cover from '../../components/Cover';
import About from '../../components/About';
import Education from '@/components/Education';
import Expertise from '@/components/Expertise';
import Achievement from '@/components/Achievement';
import { useState, useEffect } from 'react';

const Home = () => {
  
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  useEffect(() => {
    // Check localStorage for the saved button state
    const savedButton = localStorage.getItem('clickedButton');
    if (savedButton) {
      setClickedButton(savedButton);
    }
  }, []);

  const handleButtonClick = (buttonName: string) => {
    setClickedButton(buttonName);
    localStorage.setItem('clickedButton', buttonName);  // Save to localStorage
    console.log(buttonName);
  };


  return (
    <>      
      <Header title="My Header"/>

      <main className='main-content'>
          <About title='My About' />
          <Education title='My About' />
          <Expertise title='My Expertise'/>
          <Achievement title='My Achievements'/>
      </main>

      <Footer title="My Footer" />
    </>
  );
};

export default Home;
