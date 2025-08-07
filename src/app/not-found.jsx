import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>404</h1>
                <h2 className={styles.subtitle}>Página não encontrada</h2>
                <p className={styles.description}>
                    Ops! A página que você está procurando não existe.
                </p>
                <Link href="/" className={styles.homeButton}>
                    🏠 Voltar para a loja
                </Link>
            </div>
        </div>
    )
}