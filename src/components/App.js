// src/components/App.js

import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import ShoppingList from './ShoppingList';

const items = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Banana", category: "Fruits" },
  { id: 3, name: "Carrot", category: "Vegetables" },
  { id: 4, name: "Milk", category: "Dairy" }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

