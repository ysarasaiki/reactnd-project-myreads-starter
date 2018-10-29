import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Book from './Book'

class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		updateShelf: PropTypes.func.isRequired
	}

	// updateShelf = evt => this.props.updateShelf(this.props.book, evt.target.value)

	render() {
		const { books, updateShelf } = this.props
		const shelves = [
			{
				label: 'Currently Reading',
				key: 'currentlyReading'
			}, 
			{
				label: 'Read',
				key: 'read'
			}, 
			{
				label: 'Want to Read',
				key: 'wantToRead'
			}
		]

		const booksByShelf = shelves.map((shelf) => ({
			key: shelf.key,
			label: shelf.label,
			books: books.filter((book) => book.shelf === shelf.key)
		}))

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>

						{booksByShelf.map(shelf => 
							<div key={shelf.key} className="bookshelf">
								<h2 className="bookshelf-title">{shelf.label}</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										{shelf.books.map(book =>
											<Book 
												key={book.id}
												book = {book}
												updateShelf = {updateShelf}
												shelf = {shelf}
											/>
										)}
									</ol>
								</div>
							</div>							

						)}						
					</div>
				</div>
				<div className="open-search">
					<Link to='/search'>
						Add a book
					</Link>
				</div>
			</div>

		)
	}	
}

export default ListBooks;