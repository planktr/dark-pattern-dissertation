import { Carousel } from '../../components/Carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductHeader = () => {

    return (
        <>
        <h2 className="text-3xl">DYSON Cool™ Tower Fan</h2>
        <div className="text-sm">
            <FontAwesomeIcon className="text-red-500" icon="star"/>
            <FontAwesomeIcon className="text-red-500" icon="star"/>
            <FontAwesomeIcon className="text-red-500" icon="star"/>
            <FontAwesomeIcon className="text-red-500" icon="star"/>
            <FontAwesomeIcon className="text-red-500" icon="star-half-stroke"/>
            <span className="pl-2 text-currys-primary tracking-tight">Ask a question</span>
        </div>
        <div className="flex space-x-3 text-xs mt-2 mb-4">
            <span className="border-l-4 rounded-sm border-currys-primary px-2 py-1 bg-violet-100">Buy now pay later</span>
            <span className="border-l-4 rounded-sm border-currys-primary px-2 py-1 bg-violet-100">Free next day delivery</span>
        </div>
        <Carousel />
        <div className="grid grid-cols-4 gap-4 text-center mt-8 font-bold">
            <span>Power: 56 W</span>
            <span>10 speed settings</span>
            <span>9 hour timer</span>
            <span>Remote control</span>
        </div>
        </>
    )
}

export default ProductHeader;