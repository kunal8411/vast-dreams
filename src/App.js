import React from 'react';
import Header from './components/header/header.component'
import './App.css';
import { Switch, Route}  from 'react-router-dom';
import {CardList} from './components/card-list/card-list.component'
import FilteredBooks from './components/filtered-books/filtered-books.components'

import {SearchBox} from './components/search-box/search-box.component'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      books:[],
      searchField:""
    }
  }
  componentDidMount(){
    
    const url ="http://localhost:8000/books"
    const herokuUrl="https://cors-anywhere.herokuapp.com/"
    fetch( herokuUrl + url)
    .then(response=> response.json())
    .then(book=>this.setState({books:book.books}))
  }
  handleChange= (e)=>{
    this.setState({searchField: e.target.value})
    
 }
  render(){
    const { books, searchField } = this.state;
    const filteredBooks = books.filter(books =>
      books.title.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
         
          <Header/>
          <h1>My-Book-Store</h1>
          <SearchBox
          placeholder='Search Monster'
          handleChange= {this.handleChange}
        />
          <Switch>
          <Route exact path='/' component={() => <CardList books={filteredBooks} />}/>
          <Route exact path='/node' component={() => <FilteredBooks books={this.state.books} search="node"/>}/>
          <Route exact path='/net' component={() => <FilteredBooks books={this.state.books} search="net"/>}/>
          <Route exact path='/java' component={() => <FilteredBooks books={this.state.books} search="java"/>}/>
          <Route exact path='/php' component={() => <FilteredBooks books={this.state.books} search="php"/>}/>
          <Route exact path='/mongodb' component={() => <FilteredBooks books={this.state.books} search="mongodb"/>}/>
          <Route exact path='/python' component={() => <FilteredBooks books={this.state.books} search="python"/>}/>
          </Switch>
          
           
      </div>
    );
  }
 
}

export default App;
