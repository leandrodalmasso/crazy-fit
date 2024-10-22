import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';

const App: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
