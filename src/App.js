import React, { useState } from 'react';
import './index.css' ;
import { Routes , Route } from 'react-router-dom';
import Netflix from './components/Netflix';
import AmazonPrime from './components/AmazonPrime';
import Home from './components/Home';



export default function App() {

  const BgStyle = {
    backgroundColor: 'white',
    color: 'black'
  }

  const [currBgStyle, setBgStyle] = useState(BgStyle) ;

  const [btnText, setBtxText] = useState('Dark Mode') ;  

  const toggleColor = () => {
    console.log(currBgStyle)
    if (currBgStyle.backgroundColor === 'white') {
      setBgStyle({backgroundColor : 'black', color: 'white'})
      setBtxText('Light Mode')
    } else {
      setBgStyle({backgroundColor : 'white', color: 'black'})
      setBtxText('Dark Mode')
    }
  }
  
  return (
    <>
    <button type="button" className="btn btn-primary" style={{marginTop: "10px" , marginLeft: "1700px"}} onClick={toggleColor}>{btnText}</button>
      <Routes>
        <Route exact path="/netflix" element={<Netflix cardStyle={currBgStyle} />} />
        <Route exact path="/amazonprime" element={<AmazonPrime cardStyle={currBgStyle} />} />
        <Route exact path="/" element={<Home cardStyle={currBgStyle} />} />
      </Routes>
  </>
  )
};