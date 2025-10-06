import React from "react";

const BookItem = ({ book, onAddToCart }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p className="price">₹{book.price}</p>
      <p
        className={`stock ${
          book.availability === "In Stock" ? "in-stock" : "out-of-stock"
        }`}
      >
        {book.availability}
      </p>

      <button
        onClick={() => onAddToCart(book)}
        disabled={book.availability === "Out of Stock"}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BookItem;
