/**
 * useListHeight - a custom React hook for determining and tracking the height of an HTML list (ul).
 *
 * The hook takes `data` as an input parameter and returns a reference to the list and its current height.
 * The list height is calculated as the difference between the window height and the top edge of the list element.
 * The height calculation happens when the `data` changes, upon component mounting, and when the window is resized.
 *
 * @param {any} data - The data used to update the list height.
 * @returns {{ listRef: React.RefObject<HTMLUListElement>, listHeight: number }} A reference to the list element and its height.
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
 *     // Updating data
 *     setMyData([...newData]);
 *   }, []);
 *
 *   return (
 *     <ul ref={listRef} style={{ maxHeight: listHeight }}>
 *       {myData.map((item, index) => (
 *         <li key={index}>{item}</li>
 *       ))}
 *     </ul>
 *   );
 * };
 * ```
 */

import { useRef, useEffect, useState } from 'react';

// eslint-disable-next-line
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
};

export default useListHeight;
