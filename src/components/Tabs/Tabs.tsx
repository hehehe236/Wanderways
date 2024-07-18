import { useState } from 'react';

import cls from './Tabs.module.css';

import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';

export type TabsProps = { getIsParcel: (isParcel: boolean) => void }

export const Tabs = ({getIsParcel}: TabsProps) => {
    const [isParcel, setIsParcel] = useState(true);
    const handleClick = (isParcelTab: boolean): void => {
        if (isParcel !== isParcelTab) {
            setIsParcel(isParcelTab);
            getIsParcel(isParcelTab);
        }
    };

    return (
        <section className={cls.container}>
            <Button
                variant={"tab"}
                size={'tab'}
                background={isParcel ? "white" : "secondary"}
                onClick={() => handleClick(true)}
            >
                <Text size={'body2_font_bold'} color={'primary'}>Parcels</Text>
            </Button>
            <Button
                variant={"tab"}
                size={'tab'}
                background={isParcel ? "secondary" : "white"}
                onClick={() => handleClick(false)}
            >
                <Text size={'body2_font_bold'} color={'primary'}>Rides</Text>
            </Button>
        </section>
    );
}