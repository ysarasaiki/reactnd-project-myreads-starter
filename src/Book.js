import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Book extends Component {

	static propTypes = {
		book: PropTypes.object.isRequired,
		updateShelf: PropTypes.func.isRequired
	}

	render() {
		const { book, updateShelf, shelf } = this.props
		
		// account for books without images
		const imageURL = book.imageLinks && book.imageLinks.smallThumbnail
			? book.imageLinks.smallThumbnail
			: './icons/cancel.svg'

		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div 
							className="book-cover" 
							style={{ 
								width: 128, 
								height: 193, 
								backgroundImage: `url(${imageURL})`
						}}>
						</div>
						<div className="book-shelf-changer">
							<select defaultValue={shelf} onChange={(e) => updateShelf(book, e.target.value)}>
								<option value="move" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
				<div className="book-title">{book.title}</div>
				{book.authors && (<div className="book-authors">{book.authors.join(', ')}</div>)}
				</div>
			</li>
		)
	}
}

export default Book;