import React from "react";
import _ from "lodash";

const ProductList = () => {
  const products = [
    { id: 1, name: "Product 1", category: "Category A" },
    { id: 2, name: "Product 2", category: "Category B" },
    { id: 3, name: "Product 3", category: "Category A" },
    { id: 4, name: "Product 4", category: "Category A" },
    { id: 4, name: "Product 4", category: "Category C" },
    { id: 4, name: "Product 4", category: "Category C" },

    { id: 4, name: "Product 4", category: "Category C" },
    { id: 4, name: "Product 4", category: "Category C" },
    { id: 4, name: "Product 4", category: "Category C" },
  ];

  // Group products by category using Lodash
  const groupedProducts = _.groupBy(products, "category");

  return (
    <div>
      {Object.keys(groupedProducts).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {groupedProducts[category].map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
