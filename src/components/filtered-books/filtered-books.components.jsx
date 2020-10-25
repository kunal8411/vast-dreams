
import React from 'react';
import './filtered-books.styles.scss'
import {Card} from '../card/card.component'
const   FilteredBooks = (props) => {
    const filteredBook = props.books.filter(book =>
        book.title.toLowerCase().includes(props.search.toLowerCase())
      )
    return (
    <div className='filtered-list'>
     { 
        filteredBook.map(books=>(
        <Card books={books}/>
    ))
}

    </div>
    )
}
 
export default FilteredBooks;