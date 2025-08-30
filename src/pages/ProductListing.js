import React from "react";
import { plants } from "../plantsData"; // updated import
import ProductCard from "../components/ProductCard";

const ProductListingPage = () => {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat} Plants</h2>
          <div className="product-grid">
            {plants.filter(p => p.category === cat).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
