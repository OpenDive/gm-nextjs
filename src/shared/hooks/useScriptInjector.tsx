import { useEffect } from 'react';

type Props = {
    id: string;
    url: string;
    onload?: Function | null | undefined;
};

export default function useScriptInjector({ id, url, onload }: Props) {
    useEffect(() => {
        // Having ID prevents dom from adding same script more than once
        const currentElement = document.getElementById(id);
        if (currentElement) {
            return;
        }

        const head: HTMLBodyElement | null = document.querySelector('body');
        const script = document.createElement('script');

        script.setAttribute('id', id);
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', `${window.location.origin}/${url}`);

        head?.appendChild(script);

        return () => {
            head?.removeChild(script);
        };
    }, [url]);
}
