import React from 'react'

export default function Card(props) {


  let {image, title, text, redirect_link, cardBgColor, cardTextColor} = props ;

  const cardStyle = {width: "18rem" , 
   borderWidth: "1rem", 
  }

  cardStyle.backgroundColor = cardBgColor ;
  cardStyle.color = cardTextColor ;

  
  return (
    <>
    <div className='my-3'>
    <div className="card" style={cardStyle}>
    <img className="card-img-top" src={image} alt="Loading pic" />
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text.slice(0,100)}</p>
    <a href={redirect_link} className="btn btn-primary">Watch show</a>
    </div>
    </div>
    </div>
    </>
  )
}
