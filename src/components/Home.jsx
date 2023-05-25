import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Home() {

    const navigate = useNavigate() ;

    const NetflixRedirect = () => {
      navigate('/netflix')   ;
    } ;

    const AmazonPrimeRedirect = () => {
        navigate('/amazonprime')   ;
      } ;

  return (
    <>
    <h1 className='heading'> Choose your favourite streaming App</h1>
      <div className='button-container'>
      <button onClick={NetflixRedirect}>Netflix</button>
      <button onClick={AmazonPrimeRedirect} style={{marginLeft: '300px'}}>Amazon Prime</button>
      </div>
    </>
  )
}
