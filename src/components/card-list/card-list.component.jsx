
import React from 'react';
import {Card} from '../card/card.component'
import './card-list.styles.css'

export const CardList = (props)=>{
    //childrens=> whatever we have passed inside the coponent where we passed info
    
    return <div className="card-list">
      
        { 

          props.books.map(books=>(
          <Card  books={books}/>
          ))
        }
       
    </div>

}
