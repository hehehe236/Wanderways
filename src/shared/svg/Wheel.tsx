export const Wheel = ({ addStyle }: { addStyle?: string }) => {
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
                d='M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21Z'
                stroke='#101828'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className={addStyle}
            />
            <path
                d='M12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z'
                stroke='#101828'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className={addStyle}
            />
            <path
                d='M12 14V21'
                stroke='#101828'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className={addStyle}
            />
            <path
                d='M10 12L3.25 10'
                stroke='#101828'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className={addStyle}
            />
            <path
                d='M14 12L20.75 10'
                stroke='#101828'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className={addStyle}
            />
        </svg>
    );
};
