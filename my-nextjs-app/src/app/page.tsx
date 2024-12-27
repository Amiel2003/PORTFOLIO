"use client";
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cover from '../components/Cover';
import Intro from '../components/Intro';
import { useState, useEffect } from 'react';


const Home = () => {


  return (
    <>      
      <title>PORTFOLIO</title>
      <Header title="My Header"/>

      <main className='main-content'>
          <Cover title='My Cover' />
          <Intro title='My About' />
      </main>

      <Footer title="My Footer" />
    </>
  );
};

export default Home;
