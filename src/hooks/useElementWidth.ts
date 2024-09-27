/**
 * useElementWidth - a custom React hook for tracking the width of an element and setting a CSS variable for width.
 *
 * This hook uses `useRef` to create a reference to an HTML element and `useEffect` to set up an event handler.
 * Upon component mounting and when the window is resized, the element's width will be updated and set in the CSS variable '--cart-ride-width'.
 *
 * @returns {React.RefObject<HTMLButtonElement>} A reference to an HTMLButtonElement that can be attached to the element.
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

import { useEffect, useRef } from 'react';

const useElementWidth = <T extends HTMLElement>() => {
    const elementRef = useRef<T>(null);

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
