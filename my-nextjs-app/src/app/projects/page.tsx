"use client";
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Projects from '@/components/Projects';
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
      <title>PROJECTS</title>
      <Header title="My Header"/>

      <main className='main-content'>
        <Projects title="My Projects" />
      </main>

      <Footer title="My Footer" />
    </>
  );
};

export default Home;
