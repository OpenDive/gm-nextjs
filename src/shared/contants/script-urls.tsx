type Script = {
    id: string;
    url: string;
    onload?: Function | null | undefined;
};

export const GAME_SCRIPT: Script = {
    id: 'game_extension',
    url: 'html5game/GameExtension.js'
};

export const TPH_EXTENSION: Script = {
    id: 'tph',
    url: 'html5game/tph_FuncExtension.js'
};
