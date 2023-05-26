import React from 'react'
import Card from './Card'
import '../index.css' ;
import {Helmet} from 'react-helmet';
import {PrimeData} from '../data/Prime_shows' 



export default function AmazonPrime(props) {

  let bgColor = props.cardStyle.backgroundColor ;
  let cardTextColor = props.cardStyle.color ;

  return (
    <>
    <Helmet>
      <style>{`body { background-color: ${bgColor}; }`}</style>
    </Helmet>
    <h1 className='heading' style={{backgroundColor: "#ACF6E8"}}>Top 5 Amazon Prime Shows</h1>
    <div className='card-container'>
    {PrimeData.map( (val) => {
        return (
            <Card key={val.key} title={val.title} image={val.image} text={val.text} redirect_link={val.redirect_link}
             cardBgColor={bgColor} cardTextColor={cardTextColor} />
        );
    })}
    </div>
    </>
  )
}
