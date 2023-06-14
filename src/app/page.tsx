import styles from './page.module.css';
import { GAME_ROUTE } from '@/shared/contants/app-routes';
import Link from 'next/link';

export default function Home() {
    return (
        <main className={styles.main}>
            <Link href={GAME_ROUTE.route}>Start Game</Link>
        </main>
    );
}
