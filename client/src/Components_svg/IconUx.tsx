interface IconProps {
    className?: string;
    color: string;
}

const IconUx = ({className, color} : IconProps) => {
    
    return (
        <svg 
            className={className}
            width="405" height="405" viewBox="0 0 405 405" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M108.75 165V202.5C108.75 215.001 116.25 240 146.25 240C176.25 240 183.75 215.001 183.75 202.5V165M240 165L268.125 202.5M268.125 202.5L296.25 240M268.125 202.5L296.25 165M268.125 202.5L240 240" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M202.5 390C306.053 390 390 306.053 390 202.5C390 98.9466 306.053 15 202.5 15C98.9466 15 15 98.9466 15 202.5C15 306.053 98.9466 390 202.5 390Z" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
};

export default IconUx;