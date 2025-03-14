import React from "react";
import { ProductCard } from "./ProductCard";

type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
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
          image={product.image}
                    showActionButton={true}
        />
      ))}
    </div>
  );
}

export default ProductCardGrid;