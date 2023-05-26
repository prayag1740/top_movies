import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Helmet} from 'react-helmet';



export default function Home(props) {

    const navigate = useNavigate() ;

    const NetflixRedirect = () => {
      navigate('/netflix')   ;
    } ;

    const AmazonPrimeRedirect = () => {
        navigate('/amazonprime')   ;
      } ;

    let color = props.cardStyle.backgroundColor ;

  return (
    <>
    <Helmet>
      <style>{`body { background-color: ${color}; }`}</style>
    </Helmet>
    <h1 className='heading' style={{backgroundColor: "#ACF6E8"}}> Choose your favourite streaming App</h1>
      <div className='button-container' >
      <button onClick={NetflixRedirect}>Netflix</button>
      <button onClick={AmazonPrimeRedirect} style={{marginLeft: '300px'}}>Amazon Prime</button>
      </div>
    </>
  )
}
