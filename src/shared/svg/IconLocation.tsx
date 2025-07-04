export const IconLocation = ({ addStyle }: { addStyle?: string }) => {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={addStyle}
        >
            <circle cx='12' cy='11' r='3' stroke='#28303F' strokeWidth='1.5' className={addStyle} />
            <path
                d='M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z'
                stroke='#28303F'
                strokeWidth='1.5'
                className={addStyle}
            />
        </svg>
    );
};
