interface IconProps {
    className?: string;
    color: string;
}

const IconCatalog = ({ className, color }: IconProps) => {
    return (
        <svg 
            className={className}
            width="290" height="375" viewBox="0 0 290 375" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M281.685 6.7793C281.328 2.93774 278.087 0 274.209 0H15.7921C11.9135 0 8.67393 2.93774 8.31537 6.7793C8.2307 7.67139 0 96.9192 0 187.5C0 278.081 8.2307 367.329 8.31464 368.221C8.6732 372.063 11.9128 375 15.7914 375H274.209C278.087 375 281.327 372.062 281.685 368.221C281.769 367.329 290 278.081 290 187.5C290 96.9192 281.77 7.67139 281.685 6.7793ZM267.324 360.06H22.677C22.3383 356.044 21.8752 350.347 21.3436 343.278H201.322C205.469 343.278 208.831 339.933 208.831 335.808C208.831 331.683 205.469 328.338 201.322 328.338H20.2686C17.9096 293.984 15.0191 240.982 15.0191 187.5C15.0191 134.032 17.9104 81.0227 20.2694 46.6619H201.322C205.469 46.6619 208.831 43.3169 208.831 39.1919C208.831 35.0669 205.469 31.7219 201.322 31.7219H21.3436C21.8752 24.6533 22.3383 18.9565 22.677 14.9399H267.324C269.215 37.3608 274.982 111.957 274.982 187.5C274.982 263.019 269.214 337.634 267.324 360.06Z" fill={color}/>
            <path d="M249.361 31.7207H229.484C225.337 31.7207 221.975 35.0657 221.975 39.1907C221.975 43.3157 225.337 46.6606 229.484 46.6606H249.361C253.508 46.6606 256.871 43.3157 256.871 39.1907C256.871 35.0657 253.508 31.7207 249.361 31.7207Z" fill={color}/>
            <path d="M249.361 328.338H229.484C225.337 328.338 221.975 331.683 221.975 335.808C221.975 339.933 225.337 343.278 229.484 343.278H249.361C253.508 343.278 256.871 339.933 256.871 335.808C256.871 331.683 253.508 328.338 249.361 328.338Z" fill={color}/>
            <path d="M145.002 92.6934C92.4512 92.6934 49.6978 135.224 49.6978 187.5C49.6978 239.777 92.4512 282.307 145.002 282.307C197.553 282.307 240.306 239.777 240.306 187.5C240.306 135.224 197.553 92.6934 145.002 92.6934ZM145.002 267.367C100.733 267.367 64.7161 231.539 64.7161 187.5C64.7161 143.461 100.732 107.633 145.002 107.633C189.272 107.633 225.287 143.462 225.287 187.5C225.287 231.539 189.271 267.367 145.002 267.367Z" fill={color}/>
            <path d="M196.146 175.782C201.349 163.583 198.403 149.167 188.068 139.91C177.733 130.652 163.013 129.245 151.361 135.667C141.305 126.976 126.613 125.307 114.569 132.225C102.525 139.142 96.6311 152.633 99.1697 165.642C87.7532 172.469 81.6179 185.854 84.5099 199.387C87.402 212.92 98.4791 222.664 111.699 224.282C114.699 237.192 125.599 247.133 139.431 248.579C140.576 248.698 141.713 248.757 142.84 248.757C155.322 248.757 166.469 241.562 171.634 230.548C184.907 231.692 197.775 224.46 203.434 211.82C209.091 199.182 205.887 184.821 196.146 175.782ZM189.713 205.744C186.167 213.668 177.266 217.584 169.008 214.85C166.971 214.177 164.741 214.403 162.884 215.47C161.025 216.537 159.714 218.346 159.282 220.436C157.533 228.916 149.677 234.627 141.001 233.72C132.33 232.814 125.838 225.601 125.898 216.945C125.912 214.81 125.007 212.771 123.413 211.342C122.026 210.1 120.234 209.424 118.389 209.424C118.111 209.424 117.831 209.439 117.552 209.471C108.899 210.43 101.015 204.765 99.2014 196.281C97.3894 187.797 102.277 179.425 110.573 176.807C112.619 176.161 114.289 174.675 115.162 172.725C116.035 170.775 116.027 168.546 115.141 166.601C111.546 158.717 114.53 149.501 122.08 145.165C129.63 140.829 139.146 142.866 144.211 149.905C145.461 151.641 147.398 152.762 149.532 152.985C151.664 153.204 153.796 152.512 155.381 151.072C161.807 145.234 171.539 145.209 178.019 151.013C184.498 156.817 185.49 166.448 180.326 173.416C179.052 175.135 178.579 177.314 179.026 179.402C179.472 181.491 180.795 183.29 182.661 184.344C190.228 188.621 193.261 197.82 189.713 205.744Z" fill={color}/>
            <path d="M165.269 182.314C164.175 177.193 161.142 172.803 156.73 169.953C152.317 167.103 147.054 166.132 141.906 167.22C136.759 168.308 132.347 171.325 129.481 175.716C126.616 180.105 125.64 185.343 126.734 190.461C127.828 195.581 130.86 199.97 135.274 202.821C138.579 204.956 142.295 205.977 145.971 205.977C152.423 205.977 158.752 202.833 162.521 197.06C165.387 192.67 166.363 187.433 165.269 182.314ZM149.926 188.922C148.521 191.075 145.619 191.689 143.453 190.29C141.29 188.893 140.673 186.004 142.078 183.851V183.85C142.758 182.807 143.808 182.092 145.029 181.833C145.357 181.764 145.684 181.729 146.011 181.729C146.906 181.729 147.783 181.986 148.551 182.482C149.6 183.159 150.319 184.203 150.579 185.418C150.838 186.636 150.607 187.879 149.926 188.922Z" fill={color}/>
        </svg>

    )
};

export default IconCatalog;