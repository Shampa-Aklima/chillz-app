import React from "react";
import { ProductCard } from "./ProductCard";

type Product = {
  id: string;
  title: string;
  price: string;
  discount: string;
  weight: string;
  image: string;
  available: string;
  sold: string;
};

type ProductCardGridProps = {
  products: Product[];
};



function ProductCardGrid({ products }: ProductCardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          discount={product.discount}
          weight={product.weight}
          image={product.image}
          available={product.available}
          sold={product.sold}
        />
      ))}
    </div>
  );
}

export default ProductCardGrid;