export const IconAdd = ({ addStyle }: { addStyle?: string }) => {
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
                d='M12 6V18M18 12L6 12'
                stroke='#6377E2'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className={addStyle}
            />
        </svg>
    );
};
