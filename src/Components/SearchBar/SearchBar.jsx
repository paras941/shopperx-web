import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import './SearchBar.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { all_product } = useContext(ShopContext);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 0) {
      const filtered = all_product.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered.slice(0, 5));
      setIsOpen(true);
    } else {
      setFilteredProducts([]);
      setIsOpen(false);
    }
  };

  const handleProductClick = () => {
    setSearchQuery('');
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="search-bar" ref={searchRef}>
      <div className="search-input-wrapper">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => searchQuery.length > 0 && setIsOpen(true)}
        />
        {searchQuery && (
          <button className="search-clear" onClick={() => {setSearchQuery(''); setIsOpen(false);}}>
            ×
          </button>
        )}
      </div>
      
      {isOpen && filteredProducts.length > 0 && (
        <div className="search-results">
          {filteredProducts.map((product) => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id} 
              className="search-result-item"
              onClick={handleProductClick}
            >
              <img src={product.image} alt={product.name} />
              <div className="search-result-info">
                <p className="search-result-name">{product.name}</p>
                <div className="search-result-prices">
                  <span className="new-price">${product.new_price}</span>
                  <span className="old-price">${product.old_price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      
      {isOpen && searchQuery && filteredProducts.length === 0 && (
        <div className="search-results">
          <div className="search-no-results">
            <p>No products found for "{searchQuery}"</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
