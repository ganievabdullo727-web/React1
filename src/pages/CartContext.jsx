import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  async function getProducts() {
    try {
      const res = await fetch(
        "https://test-swagger-2ph6.onrender.com/products",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      );
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (p) => setCart([...cart, p]);
  const removeFromCart = (id) => setCart(cart.filter((i) => i.id !== id));

  return (
    <CartContext.Provider value={{ products, cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
