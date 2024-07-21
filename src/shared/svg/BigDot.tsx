export const BigDot = ({ addStyle }: { addStyle?: string }) => {
    return (
        <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={addStyle}
        >
            <circle
                cx="7.5"
                cy="8"
                r="7.5"
                fill="#6377E2"
                className={addStyle}
            />
        </svg>
    );
}