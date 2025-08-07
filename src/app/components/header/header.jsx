import styles from './header.module.css';
import { products } from '../../../data/product';

export default function Header() {
    function countProducts() {
        const products = document.querySelectorAll('.product-card');
        document.getElementById('totalProducts').textContent = products.length;
    }
    
    if (typeof window !== 'undefined') {
        window.onload = countProducts;
    }

    return (
        <div className={styles.header}>
            <h1>🛒 Loja de Eletrônicos</h1>
            <p>Os melhores produtos com os melhores preços!</p>
            <p>📊 Total de produtos: <span id="totalProducts">{products.length}</span></p>
        </div>

    );
}