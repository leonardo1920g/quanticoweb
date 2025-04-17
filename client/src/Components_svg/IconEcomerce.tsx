interface IconProps {
    className?: string;
    color: string;
}
  
const IconEcomerce = ({className, color} : IconProps) => {
    return (
        <svg 
            className={className}
            width="405" height="405" viewBox="0 0 405 405" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M83.7452 56.6667H390L348.333 202.5H106.181M369.167 285.833H119.167L77.5 15H15M140 369.167C140 380.673 130.673 390 119.167 390C107.661 390 98.3333 380.673 98.3333 369.167C98.3333 357.66 107.661 348.333 119.167 348.333C130.673 348.333 140 357.66 140 369.167ZM369.167 369.167C369.167 380.673 359.84 390 348.333 390C336.827 390 327.5 380.673 327.5 369.167C327.5 357.66 336.827 348.333 348.333 348.333C359.84 348.333 369.167 357.66 369.167 369.167Z" stroke={color} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
};

export default IconEcomerce;