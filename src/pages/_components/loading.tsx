import { type NextPage } from "next"
import Image from "next/image"

type LoadingType = {
    type: string
}

const LoadingCmp: NextPage<LoadingType> = (props) => {
    return (
        <>
            
            <div className="flex justify-center text-md capitalize">
                <Image 
                    className="animate-spin mr-2"
                    src="/assets/images/spinner.png" 
                    height={10} 
                    width={30} 
                    alt="spinner"
                />
                Loading {props.type}...
            </div>
        </>
    )
}

export default LoadingCmp