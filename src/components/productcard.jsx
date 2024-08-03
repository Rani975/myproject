
import React from 'react';
import { Link } from 'react-router-dom';
import './productcard.css';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <Link to={`/product/${product.id}`}>
    <img src={product.image} alt={product.title} className="product-image" />
    <div className="product-info">
      <h3 className="product-title">{product.title}</h3>
    </div>
    </Link>
  </div>
);

export default ProductCard;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './productcard.css';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <Link to={`/product/${product.id}`}>
//         <img src={product.image} alt={product.title} />
//         <h3>{product.title}</h3>
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;

