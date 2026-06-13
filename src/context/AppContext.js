import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null); // يبدأ بـ null لإجبار المستخدم على التسجيل أولاً

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.find(f => f.id === item.id);
      if (exists) return prev.filter(f => f.id !== item.id);
      return [...prev, item];
    });
  };

  return (
    <AppContext.Provider value={{ cart, setCart, addToCart, favorites, toggleFavorite, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;