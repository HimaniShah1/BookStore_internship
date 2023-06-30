import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import CartNot from "../assets/images/Cart.png";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function clearItemFunc() {
    dispatch(clearItem());
  }
  
  function removeItemFunc(itemId) {
    dispatch(removeItem(itemId));
  }
  
  const totalSum = cartItems.reduce(
    (accumulator, item) => accumulator + (item.price || 250)/1,
    0
  );

  return (
    <div className="books-back">
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <img src={CartNot} alt="Cart" className="cart-image" />
          <Link to="/card">
            <button className="explore-button">
              Explore More Books
            </button>
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          {/* <h1 className="cart-title">
            Cart ({cartItems.length})
          </h1> */}

          <div className="card-grid">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-card"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="card-image"
                />
                <div className="card-details">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-price">{item.price}</p>
                  <button
                    className="remove-button"
                    onClick={() => removeItemFunc(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <button
              className="clear-button"
              onClick={() => clearItemFunc()}
            >
              Clear Cart
            </button>
            <div className="total">
              <h3 className="total-title">Total: &#8377;{totalSum.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
