/**
 * useElementWidth - кастомний React хук для відстеження ширини елемента та встановлення CSS змінної для ширини.
 *
 * Цей хук використовує `useRef` для створення референсу до HTML елемента і `useEffect` для встановлення обробника подій.
 * При монтуванні компонента і при зміні розміру вікна, ширина елемента буде оновлюватися і встановлюватися в CSS змінну '--cart-ride-width'.
 *
 * @returns {React.RefObject<HTMLButtonElement>} Референс до HTMLButtonElement, який можна прив'язати до елемента.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import useElementWidth from './useElementWidth';
 *
 * const MyComponent: React.FC = () => {
 *   const buttonRef = useElementWidth();
 *
 *   return (
 *     <button ref={buttonRef} style={{ '--cart-ride-width': 'auto' }}>
 *       Click Me
 *     </button>
 *   );
 * };
 * ```
 */

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

        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return elementRef;
};

export default useElementWidth;
