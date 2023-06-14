export const _initializeGame = () => {
    const timer = setTimeout(() => {
        clearTimeout(timer);
        // @ts-ignore
        const GameMaker_Init = window?.GameMaker_Init;
        if (GameMaker_Init) {
            GameMaker_Init();
        }
    }, 1000);
};
