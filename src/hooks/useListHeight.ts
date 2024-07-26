/**
 * useListHeight - кастомний React хук для визначення і відстеження висоти HTML списку (ul).
 *
 * Хук приймає `data` як вхідний параметр і повертає референс до списку та його поточну висоту.
 * Висота списку обчислюється як різниця між висотою вікна і верхньою межею елементу списку.
 * Обчислення висоти відбувається при зміні даних `data`, при монтуванні компонента та при зміні розміру вікна.
 *
 * @param {any} data - Дані, які використовуються для оновлення висоти списку.
 * @returns {{ listRef: React.RefObject<HTMLUListElement>, listHeight: number }} Референс до елементу списку та його висота.
 *
 * @example
 * ```tsx
 * import React, { useState, useEffect } from 'react';
 * import useListHeight from './useListHeight';
 *
 * const MyComponent: React.FC = () => {
 *   const [myData, setMyData] = useState([]);
 *   const { listRef, listHeight } = useListHeight(myData);
 *
 *   useEffect(() => {
 *     // Оновлення даних
 *     setMyData([...newData]);
 *   }, []);
 *
 *   return (
 *     <ul ref={listRef} style={{ height: `${listHeight}px` }}>
 *       /* елементи списку */
 // *     </ul>
 // *   );
 // * };
 // * ```
 // */


import { useRef, useEffect, useState } from 'react';

const useListHeight = (data: any) => {
    const listRef = useRef<HTMLUListElement | null>(null);
    const [listHeight, setListHeight] = useState<number>(0);

    const updateHeight = () => {
        if (listRef.current) {
            const rect = listRef.current.getBoundingClientRect();
            setListHeight(window.innerHeight - rect.top);
        }
    };

    useEffect(() => {
        if (data) updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, [data]);

    useEffect(() => {
        updateHeight();
    }, []);

    return { listRef, listHeight };
}

export default useListHeight;
