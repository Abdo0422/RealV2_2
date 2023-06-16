import { InertiaLink } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from 'react';

export default function Product({ product }) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white p-4" id="proimg2">
      <InertiaLink
        href={`/products/${product.id}`}
        className="group flex flex-col items-center"
      >
        <div id="aspectimg" className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200">
          {isLoading ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          ) : (
            <>
             <img
  src={"/products/" + product.image}
  alt="productImage"
  className="h-full w-full sm:w-full sm:h-full object-cover object-center group-hover:opacity-75"
  style={{ width: "100%", height: "300px" }}
/>

            </>
          )}
        </div>
        <h3 id="pretext5" className="mt-4 text-sm text-gray-700 sm:w-full">{product.title}</h3>
<p id="pretext6"  className="mt-1 text-sm font-medium text-gray-900 sm:w-full">
  <span className="colored">{product.price}</span> DH
</p>

      </InertiaLink>
    </div>
  );
}
