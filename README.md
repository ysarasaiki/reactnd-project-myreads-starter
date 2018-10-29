# MyReads Project
---
#### _Udacity FEND Project_

## Table of Contents

* [About the Project](#about-the-project)
* [How to Run Locally](#how-to-run-locally)
* [How to Use](#how-to-use)
* [Dependencies](#dependencies)

### About the Project

This is a project for Udacity's React Fundamentals course, built given a template that included static CSS and HTML markup. 

This is a bookshelf app that allows users to manage a list of books that are categorized on books currently reading, already read, or want to read. 

### How to Run Locally
1. Clone this repo by running `git clone https://github.com/ysarasaiki/reactnd-project-myreads-starter.git` in terminal
2. `cd` into folder, and install all project dependencies:
    * `npm install`
    * `npm install --save react-router-dom`
3. Start the development server with `npm start`
    * Once the server is started, the app can be access by navigating to `http://localhost:3000/` in your browser

### How to Use
The main app screen displays books stored on your bookshelf, categorized into:
    * Currently Reading
    * Read
    * Want to Read
Each book listing displays the Title and Author of the book. 

By clicking on the arrow icon at the bottom right, you can update the category. Selecting 'None' will remove the book from your bookshelf. 

The plus icon at the bottom right of the app will take you to search page. See valid search terms [Here](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md). 

You can add books to your bookshelf by clicking on the arrow icon. 

### Dependencies
* The project was built on the base code provided in `https://github.com/udacity/reactnd-project-myreads-starter`
* This project uses React and ReactRouter (see [How to Run Locally](#how-to-run-locally))
