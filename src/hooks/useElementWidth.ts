import { useRef, useEffect } from 'react';

const useElementWidth = () => {
    const elementRef = useRef<HTMLButtonElement>(null);

    const updateWidth = () => {
        if (elementRef.current) {
            const { width } = elementRef.current.getBoundingClientRect();
            elementRef.current.style.setProperty('--cart-ride-width', `${width}px`);
        }
    };

    useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    return elementRef;
};

export default useElementWidth;
