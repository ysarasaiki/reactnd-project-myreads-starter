import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBook extends Component {
	state = {
		query: '',
		searchResults: []
	}

	updateQuery = (query) => {
		this.setState({query: query.trim()})


		if (query) {
			BooksAPI.search(query).then(results => {
				this.setState({searchResults: results})
			})
		} else {
			this.setState({searchResults: []})
		}
	}

	render() {
		const { searchResults } = this.state
		const { updateShelf, books } = this.props

		const checkShelf = (book) => {
			// get shelf info from current bookshelf
			const bookInShelf = books.filter(checkBook => checkBook.title === book.title)

			return (bookInShelf.length !== 0
				? bookInShelf[0].shelf
				: 'none'
			)
			
		}

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						<input 
							type="text" 
							placeholder="Search by title or author"
							onChange = {(evt) => this.updateQuery(evt.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{!searchResults.length ? (
							<div>No Result</div>
						) : (
							searchResults.map(book => 
								<Book 
									key={book.id}
									book = {book}
									updateShelf = {updateShelf}
									shelf = {checkShelf(book)}
								/>								
							)
						)}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchBook;