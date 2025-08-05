import Image from 'next/image';
import styles from './productCard.module.css';

export default function ProductCard({ product }) {
    return (
        <div className={styles.products}>
            <div className={styles.productCard}>
                <div className={styles.productImage}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={200}
                    />
                </div>
                <div className={styles.productTitle}>{product.title}</div>
                <div className={styles.productPrice}>{product.price}</div>
                <div className={styles.productDescription}>{product.description}</div>
                
            </div>
        </div>
    );
}