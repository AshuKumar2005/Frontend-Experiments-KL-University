import React, { useState } from "react";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  // ✅ Add book to cart
  const handleAddToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  // ✅ Remove book from cart
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1>📚 Online Bookstore</h1>
        <p>Browse books, add them to your cart, and view total instantly!</p>
      </header>

      {/* Book Listing */}
      <BookList onAddToCart={handleAddToCart} />

      {/* Shopping Cart */}
      <Cart cart={cart} onRemove={handleRemoveFromCart} />
    </div>
  );
};

export default App;
