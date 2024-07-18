export const Dot = ({ addStyle }: { addStyle?: string }) => {
    return (
        <svg
            width="4"
            height="5"
            viewBox="0 0 4 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={addStyle}
        >
            <rect
                width="4"
                height="5"
                fill="#EAEAEA"
                className={addStyle}
            />
            <g
                id="Home - Rides"
                clipPath="url(#clip0_386_5401)"
                className={addStyle}
            >
                <rect
                    width="393"
                    height="919"
                    transform="translate(-152 -453)"
                    fill="#FAFAFA"
                    className={addStyle}
                />
                <rect
                    width="393"
                    height="919"
                    transform="translate(-152 -453)"
                    fill="#FAFAFA"
                    className={addStyle}
                />
                <g
                    id="List"
                    clipPath="url(#clip1_386_5401)"
                    className={addStyle}
                >
                    <g
                        id="Ride"
                        filter="url(#filter0_d_386_5401)"
                        className={addStyle}
                    >
                        <rect
                            x="-136"
                            y="-95"
                            width="361"
                            height="122"
                            rx="20"
                            fill="white"
                            className={addStyle}
                        />
                        <g id="Bottom"
                        className={addStyle}>
                            <g id="Content"
                            className={addStyle}>
                                <g id="Text+Icon"
                                className={addStyle}>
                                    <g id="Text"
                                    className={addStyle}>
                                        <g id="Text_2"
                                        className={addStyle}>
                                            <circle
                                                id="Ellipse 1"
                                                cx="2"
                                                cy="2.5"
                                                r="2"
                                                fill="#989898"
                                                className={addStyle}
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_d_386_5401"
                    x="-156"
                    y="-115"
                    width="401"
                    height="162"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                    className={addStyle}
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"
                    className={addStyle}/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"
                    className={addStyle}/>
                    <feOffset
                    className={addStyle}/>
                    <feGaussianBlur stdDeviation="10"
                    className={addStyle}/>
                    <feComposite in2="hardAlpha" operator="out"
                    className={addStyle}/>
                    <feColorMatrix type="matrix"
                                   values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
                    className={addStyle}/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_386_5401"
                    className={addStyle}/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_386_5401" result="shape"
                    className={addStyle}/>
                </filter>
                <clipPath id="clip0_386_5401"
                className={addStyle}>
                    <rect width="393" height="919" fill="white" transform="translate(-152 -453)"
                    className={addStyle}/>
                </clipPath>
                <clipPath id="clip1_386_5401"
                className={addStyle}>
                    <rect width="361" height="474" fill="white" transform="translate(-136 -163)"
                    className={addStyle}/>
                </clipPath>
            </defs>
        </svg>

    )
}