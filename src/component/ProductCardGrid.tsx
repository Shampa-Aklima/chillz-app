import ProductCard from "./ProductCard";
interface Product {
    image: string;
    brand: string;
    name: string;
    regularPrice: number;
    salePrice: number;
    stock: number;
    soldCount: number;
  }
const ProductCardGrid = () => {
    const products: Product[] = [
      {
        image: "/promo1.png",
        brand: "ONYX",
        name: "Great Value Peanut Butter Chocolate Protein",
        regularPrice: 3.50,
        salePrice: 2.75,
        stock: 49,
        soldCount: 18
      },
      {
        image: "/promo2.png",
        brand: "Green Giant",
        name: "Fresh Green Giant Veggie Spirals Zucchini",
        regularPrice: 5.00,
        salePrice: 4.25,
        stock: 16,
        soldCount: 34
      }
    ];
  
    return (
      <div className="flex gap-2">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    );
  };
  
  export default ProductCardGrid;