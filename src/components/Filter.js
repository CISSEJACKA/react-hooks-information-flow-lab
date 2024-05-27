// src/components/Filter.js

import React from 'react';

function Filter({ onCategoryChange }) {
  return (
    <select onChange={onCategoryChange}>
      <option value="All">All</option>
      <option value="Fruits">Fruits</option>
      <option value="Vegetables">Vegetables</option>
      <option value="Dairy">Dairy</option>
    </select>
  );
}

export default Filter;
