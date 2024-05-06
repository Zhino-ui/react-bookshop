import React from 'react';
import Book from './Book';
import { books } from './data/books';

const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
      {books.map((book, index)=>(
        <Book {...book} key={book.id} number={index} />
      ))}
        
      
    </section>
    </>
  )
}

export default BookList
