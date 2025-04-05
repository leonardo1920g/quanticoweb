import Image from "next/image";
import IconoQuantico3d from "../Images/iconoQuantico3d.png"

const Loading = () => {

    return (
        <div>
            <div>
                <Image
                    src={IconoQuantico3d}
                    alt="Loading"
                    className="h-50 w-auto"
                />
                <p>Loading...</p>
            </div>
        </div>
    )
};

export default Loading;