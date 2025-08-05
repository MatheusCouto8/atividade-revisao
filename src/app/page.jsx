import ProductCard from "./components/productCard/productCard";
import Header from "./components/header/header";
import { products } from "../data/product";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
