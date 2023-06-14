import React from 'react';
import Game from '@/components/Game/Game';
import styles from './page.module.css';

type Props = {};

function GamePage({}: Props) {
    return (
        <div className={styles.GameContainer}>
            <Game id={'gm4html5_div'} />
        </div>
    );
}

export default GamePage;
