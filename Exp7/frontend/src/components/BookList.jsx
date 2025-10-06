import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";

const BookList = ({ onAddToCart }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch JSON dynamically (works in Vite)
    fetch("/data/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error loading books:", err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default BookList;
