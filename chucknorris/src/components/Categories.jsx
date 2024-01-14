import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    category: 'allcategories',
  });

  const category = searchParams.get('category');

  const handleCategoryChange = (e) => {
    setSearchParams((prev) => {
      prev.set('category', e.target.value);
      return prev;
    });
  };

  return (
    <div className="dropdown">
      <label htmlFor="category">Choose a Category:</label>
      <br />
      <select
        name="category"
        id="category"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="allcategories">All Categories</option>
        <option value="animal">Animal</option>
        <option value="career">Career</option>
          <option value="celebrity">Celebrity</option>
          <option value="dev">Dev</option>
          <option value="explicit">Explicit</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
          <option value="history">History</option>
          <option value="money">Money</option>
          <option value="movie">Movie</option>
          <option value="music">Music</option>
          <option value="political">Political</option>
          <option value="religion">Religion</option>
          <option value="science">Science</option>
          <option value="sport">Sport</option>
          <option value="travel">Travel</option>
        </select>
    </div>  
  )
}

export default Categories;