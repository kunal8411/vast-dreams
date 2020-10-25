import React from 'react';
import './card.styles.css'
export  const Card = (props)=>(
    <div className="card-container">
        
        <img
      src={props.books.thumbnailUrl}
      alt="books"
        />
        <h2>{props.books.title}</h2>
        <p>{props.books.status}</p>
        
    </div>
)
   
