export const IconFlagUK = ({ addStyle }: { addStyle?: string }) => {
    return (
        <svg
            width='80px'
            height='80px'
            viewBox='0 -4 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={addStyle}
        >
            <g clipPath='url(#clip0_503_2809)'>
                <rect width='28' height='20' rx='2' fill='white' />
                <mask
                    id='mask0_503_2809'
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='28'
                    height='20'
                >
                    <rect width='28' height='20' rx='2' fill='white' />
                </mask>
                <g mask='url(#mask0_503_2809)'>
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0 10.6667H28V0H0V10.6667Z'
                        fill='#156DD1'
                    />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0 20H28V10.6667H0V20Z'
                        fill='#FFD948'
                    />
                </g>
            </g>
            <defs>
                <clipPath id='clip0_503_2809'>
                    <rect width='28' height='20' rx='2' fill='white' />
                </clipPath>
            </defs>
        </svg>
    );
};
