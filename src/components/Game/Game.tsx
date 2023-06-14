'use client';

import useScriptInjector from '@/shared/hooks/useScriptInjector';
import React, { useEffect, useState } from 'react';
import { _initializeGame } from './GameInitializer';
import { GAME_SCRIPT } from '@/shared/contants/script-urls';
import { TPH_EXTENSION } from '@/shared/contants/script-urls';

type Props = {
    id: string;
};

function Game({ id }: Props) {
    // Load game script (the build) from URL in public folder. Assign ID.
    useScriptInjector({
        id: GAME_SCRIPT.id,
        url: GAME_SCRIPT.url
    });
    // Load game extension script from URL in public folder. Assign ID.
    useScriptInjector({
        id: TPH_EXTENSION.id,
        url: TPH_EXTENSION.url
    });

    // Get GameMaker started, by calling 'GameMaker_Init' when it is available on window object.
    // NOTE: GameMaker adds itself to window object by default.
    if (typeof window !== 'undefined') {
        useEffect(() => {
            _initializeGame();

            return () => {
                // TODO: Need to add listeners to clean up listeners when pages changes.
                console.log('TODO: CLEAN UP GAME LISTENERS');
            };
            // @ts-ignore
        }, [window?.GameMaker_Init]);
    }

    return (
        <div className={id + '_class'} id={id + '_id'}>
            {/* Default canvas size. It can be changed */}
            <canvas id="canvas" width="1366" height="766">
                <p>Your browser doesn't support HTML5 canvas.</p>
            </canvas>
        </div>
    );
}

export default Game;
