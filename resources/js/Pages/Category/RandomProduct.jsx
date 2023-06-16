import React, { useState, useEffect } from "react";
import axios from "axios";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function RandomProduct() {
  const [products, setProducts] = useState([]);
  const [previousProducts, setPreviousProducts] = useState([]);

  useEffect(() => {
    async function fetchRandomProduct(exclude = "") {
      const response = await axios.get(`/api/products/random?exclude=${exclude}`);
      return response.data;
    }

    async function fetchProducts() {
      const previousProductIds = previousProducts.map((prev) => prev.id);
      const newProducts = [];

      for (let i = 0; i < 3; i++) {
        const exclude = [...previousProductIds, ...newProducts.map((p) => p.id)].join(",");
        const product = await fetchRandomProduct(exclude);
        newProducts.push(product);
      }

      setProducts(newProducts);
      setPreviousProducts([...previousProducts, ...newProducts]);
    }

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 bg-white p-4">
      {products.map((product) => (
        <div key={product.id}>
          <InertiaLink href={`/products/${product.id}`} className="group flex flex-col items-center">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={`/products/${product.image}`}
                alt="productImage"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                style={{ width: "100%", height: "300px" }}
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900"><span className="colored">{product.price}</span> DH</p>
          </InertiaLink>
        </div>
      ))}
    </div>
  );
}
