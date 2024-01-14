import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './components/categories';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/categories" element={<Categories />} />
        {/* Other routes go here */}
        <Route path="/" element={<h1>Welcome to Chuck Norris jokes</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
