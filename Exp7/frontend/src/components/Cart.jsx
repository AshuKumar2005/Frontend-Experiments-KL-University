import React from "react";

const Cart = ({ cart, onRemove }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.title}</span>
              <div>
                <span>₹{item.price}</span>
                <button
                  className="remove-btn"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="total">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
