import { useSelector } from 'react-redux';

import cls from './Tabs.module.css';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { selectVisibleParcelList, setVisibleParcelList } from '@/store/features/optionSlice.ts';
import { useAppDispatch } from '@/hooks/useAppDispatch.ts';

export const Tabs = () => {
    const isVisibleParcelList = useSelector(selectVisibleParcelList);
    const dispatch = useAppDispatch();

    const handleClick = (isParcelTab: boolean) => dispatch(setVisibleParcelList(isParcelTab));

    return (
        <section className={cls.container}>
            <Button
                variant={"tab"}
                size={'tab'}
                background={isVisibleParcelList ? "white" : "secondary"}
                onClick={() => handleClick(true)}
            >
                <Text size={'body2_font_bold'} color={'primary'}>Parcels</Text>
            </Button>
            <Button
                variant={"tab"}
                size={'tab'}
                background={isVisibleParcelList ? "secondary" : "white"}
                onClick={() => handleClick(false)}
            >
                <Text size={'body2_font_bold'} color={'primary'}>Rides</Text>
            </Button>
        </section>
    );
}