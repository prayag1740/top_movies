import React from 'react';
import './index.css' ;
import { Routes , Route } from 'react-router-dom';
import Netflix from './components/Netflix';
import AmazonPrime from './components/AmazonPrime';
import Home from './components/Home';



export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/netflix" element={<Netflix />} />
        <Route exact path="/amazonprime" element={<AmazonPrime />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
  </>
  )
};