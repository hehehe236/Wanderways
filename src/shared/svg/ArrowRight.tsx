export const ArrowRight = ({ addStyle }: { addStyle?: string }) => {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={addStyle}
        >
            <path
                d='M14 16L18 12M18 12L14 8M18 12L6 12'
                stroke='#101828'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className={addStyle}
            />
        </svg>
    );
};
