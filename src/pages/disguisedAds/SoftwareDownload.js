import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { wrongElement } from '../../app/testSlice';

const SoftwareDownload = () => {


    let { testId } = useParams();
    const dispatch = useDispatch();

    const handleWrongElements = () => dispatch(wrongElement({ testId: testId, stageId: 1 }));

    return (
        <>
        <div className="flex flex-col space-y-5 mr-6 tracking-tighter text-blue-900">
            <button className="flex text-base xl:text-lg w-full text-white font-bold uppercase" onClick={() => handleWrongElements()}>
                <FontAwesomeIcon className="bg-gradient-to-b from-blue-500 to-blue-800 py-4 xl:py-[17px] pl-5 pr-4 rounded-l-lg border-r" icon="circle-arrow-right"/>
                <span className="block w-full bg-gradient-to-r from-blue-500 to-blue-800 rounded-r-lg py-3">Download Now</span>
            </button>
            <div className="flex flex-col border-t border-slate-200 rounded-md p-3 bg-gradient-to-b from-slate-200 text-slate-500 items-start">
                <h3 className="text-blue-900 normal-case font-semibold"><FontAwesomeIcon className="pr-1" icon="circle-info"/>AnthemScore</h3>
                <span>&nbsp; &nbsp; &nbsp; 4.15.0</span>
                <button className="hover:text-slate-700 uppercase text-sm tracking-tighter"><FontAwesomeIcon className="pr-1" icon={["far", "eye"]} onClick={() => handleWrongElements()}/>Add to watchlist</button>
                <button className="hover:text-slate-700 uppercase text-sm tracking-tighter"><FontAwesomeIcon className="pr-1" icon="arrows-rotate" onClick={() => handleWrongElements()}/>Send us an update</button>
            </div>
            <div className="ml-1 pb-2 flex flex-col items-start space-y-2">
                <button className="font-semibold uppercase hover:text-blue-700" onClick={() => handleWrongElements()}>
                    <FontAwesomeIcon className="text-red-500 pr-1" icon="shopping-basket"/>
                    Buy now $28.00<br/>
                    <span className="block ml-6 text-start text-slate-500 text-sm font-semibold">Lite</span>
                </button>
                <button className="font-semibold uppercase hover:text-blue-700" onClick={() => handleWrongElements()}>
                    <FontAwesomeIcon className="text-red-500 pr-1" icon="shopping-basket"/>
                    Buy now $38.00<br/>
                    <span className="block ml-6 text-start text-slate-500 text-sm font-semibold">Standard</span>
                </button>
                <button className="font-semibold uppercase hover:text-blue-700" onClick={() => handleWrongElements()}>
                    <FontAwesomeIcon className="text-red-500 pr-1" icon="shopping-basket"/>
                    Buy now $48.00<br/>
                    <span className="block ml-6 text-start text-slate-500 text-sm font-semibold">Professional</span>
                </button>
            </div>
            <div>
                <h4 className="font-semibold uppercase"><FontAwesomeIcon className=" pr-1" icon="camera"/>5 Screenshots:</h4>
                <figure className="group relative">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded"
                            src="https://windows-cdn.softpedia.com/screenshots/AnthemScore_12.png" />
                            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-blue-900 opacity-0 group-hover:h-full group-hover:opacity-100 group-hover:bg-opacity-50 group-hover:cursor-pointer duration-150"><FontAwesomeIcon className="text-5xl text-white" icon="magnifying-glass"/></div>
                </figure>
                <div className="flex my-1 space-x-1">
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full max-h-24">
                        <img alt="gallery" className="block object-cover object-center w-full h-full"
                            src="https://windows-cdn.softpedia.com/screenshots/AnthemScore_16.png" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full max-h-24">
                        <img alt="gallery" className="block object-cover object-center w-full h-full"
                            src="https://windows-cdn.softpedia.com/screenshots/AnthemScore_18.png" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/3">
                        <div className="w-full max-h-24">
                        <img alt="gallery" className="block object-cover object-center w-full h-full"
                            src="https://windows-cdn.softpedia.com/screenshots/AnthemScore_12.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="uppercase">
                <h4 className="border-b font-semibold border-blue-800"><FontAwesomeIcon className="pr-1" icon="display"/>Runs on:</h4>
                <span className="block normal-case text-slate-500 mt-2">macOS 10.12 or later (Intel only)</span>
            </div>
        </div>
        </>
    )
}

export default SoftwareDownload;