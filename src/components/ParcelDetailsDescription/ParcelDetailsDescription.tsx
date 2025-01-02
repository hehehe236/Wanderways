import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/Text/Text.tsx';
import { Parcel } from '@/store/features/parcel/types.ts';
import { selectParcelById } from '@/store/features/parcel/parcelSlice.ts';
import cls from './ParcelDetailsDescription.module.css';
import useElementWidth from '@/hooks/useElementWidth.ts';

const MAX_COLLAPSED_HEIGHT = 34;

export const ParcelDetailsDescription = () => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isShowMore, setIsShowMore] = useState(false);
    const { state: parcelId } = useLocation();
    const parcel: Parcel | undefined = useSelector((state: { parcel: Parcel[] }) =>
        selectParcelById(state, parcelId)
    );

    if (!parcel) return null;

    const elementRef = useElementWidth<HTMLDivElement>();
    const containerTextRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerTextRef.current) {
            if (containerTextRef.current.clientHeight > MAX_COLLAPSED_HEIGHT) {
                setIsShowMore(true);
            }
        }
    }, [parcel.details, isExpanded, isShowMore]);

    const handleToggle = () => setIsExpanded(!isExpanded);

    return (
        <div ref={elementRef}>
            <Text size='headline2_bold' color='primary'>
                {t('parcel.details')}
            </Text>
            <div className={cls.wrap_text} ref={containerTextRef}>
                <Text
                    size='body4_font_bold'
                    color='secondary'
                    className={isExpanded ? cls.expanded : isShowMore ? cls.text : cls.expanded}
                >
                    {parcel.details || t('parcel.messageDescriptionMissing')}
                </Text>
                {!isExpanded && parcel.details && isShowMore && (
                    <button onClick={handleToggle} className={cls.moreButton}>
                        <Text size='headline2_bold'>{t('parcel.more')}</Text>
                    </button>
                )}
                {isExpanded && (
                    <button onClick={handleToggle} className={cls.moreButton}>
                        <Text size='headline2_bold'>{t('parcel.less')}</Text>
                    </button>
                )}
            </div>
        </div>
    );
};
