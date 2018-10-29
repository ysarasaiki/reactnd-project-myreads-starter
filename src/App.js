import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  // function to update shelf of books
  updateShelf = (updatedBook, shelf) => {
    // console.log(this)

    BooksAPI.update(updatedBook, shelf).then(result => {
      // set new shelf of book
      updatedBook.shelf = shelf

      // update state
      // console.log(book)
      this.setState((prevState) => ({
        books: prevState.books
          // remove book to be updated
          .filter(book => book.id !== updatedBook.id)
          // add new book info
          .concat(updatedBook)
      }))
    })
  }

  render() {
    return (
      <div className="app">
        
        <Route 
          exact path = '/'
          render = {() => (
            <ListBooks 
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
          )}
        />        
        <Route 
          exact path = '/search'
          render = {() => (
            <SearchBook 
              updateShelf={this.updateShelf}
              books={this.state.books}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
