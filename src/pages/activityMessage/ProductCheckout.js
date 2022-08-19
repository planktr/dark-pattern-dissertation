import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { wrongElement } from '../../app/testSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCheckout = () => {

    let { testId } = useParams();
    const dispatch = useDispatch();

    const handleWrongElements = () => dispatch(wrongElement({ testId: testId, stageId: 1 }));

    const radioLabel = "flex px-5 py-4 mt-3 border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:shadow-md peer-checked:border-currys-primary peer-checked:border-2";

    return (
        <>
        <div className="flex flex-col space-y-6 w-4/12 ml-3" id="check-out">
                    <span className="text-3xl font-semibold">£399.00</span>

                    <ul className="font-medium">
                        <li className="relative">
                            <input className="sr-only peer" type="radio" name="answer" id="oneOff" checked onClick={() => handleWrongElements()} />
                            <label className={radioLabel} for="oneOff">£399.00 <br/> One-off payment</label>
                            <FontAwesomeIcon className="absolute hidden w-5 h-5 peer-checked:block top-[35%] right-5 text-currys-primary" icon="circle-dot" for="oneOff"/>
                        </li>

                        <li className="relative">
                            <input className="sr-only peer" type="radio" name="answer" id="monthly" onClick={() => handleWrongElements()} />
                            <label className={radioLabel} for="monthly">£13.02 per month*</label>
                            <FontAwesomeIcon className="absolute hidden w-5 h-5 peer-checked:block top-[35%] right-5 text-currys-primary" icon="circle-dot" for="monthly"/>
                        </li>
                        <p className="font-normal text-xs mt-1">* Representative example: Credit amount £339.00. Pay 36 monthly payments of £13.02. Total amount payable £468.72. Rate of interest 24.9% (variable). 24.9% APR representative variable. 
                            <button className="underline" onClick={() => handleWrongElements()}>More info</button>
                        </p>
                    </ul>

                    <button className="flex text-left px-5 py-3 mt-3 border border-gray-300 rounded-lg cursor-pointer text-sm hover:shadow-md" onClick={() => handleWrongElements()}>
                        <FontAwesomeIcon className="text-currys-primary text-lg mr-2" icon="money-check"/>
                        <div>
                            <span className="block mb-1">Pay nothing for 12 months. 24.9% APR representative (variable)* </span>
                            <span className="text-red-500 font-medium">+2 more offers</span>
                        </div>
                        <FontAwesomeIcon className="my-auto text-gray-500 text-lg ml-2" icon="chevron-right"/>
                    </button>

                    <div className="bg-slate-100 px-3 py-5 rounded-lg">
                        <span className="">Check stock in your area</span>
                        <form className="flex my-3">
                            <input className="address rounded-l-md w-4/5 px-2 py-1 outline-none" type="text" placeholder="Enter town or full postcode" onClick={() => handleWrongElements()}/>
                            <button disabled={true} className="bg-white text-gray-500 hover:text-currys-primary rounded-r-md w-1/5 px-2 py-1"><FontAwesomeIcon icon="magnifying-glass"  onClick={() => handleWrongElements()}/></button>
                        </form>
                        <span className="text-sm"><FontAwesomeIcon className="text-green-700" icon="truck" />&nbsp; FREE FAST delivery on orders over £50</span><br/>
                        <span className="text-sm"><FontAwesomeIcon className="text-green-700" icon="warehouse" />&nbsp; FREE collection from Store subject to Stock availability</span>
                    </div>

                    <button className="w-full bg-currys-primary hover:bg-violet-800 rounded-full text-white py-3"><FontAwesomeIcon icon="basket-shopping" onClick={() => handleWrongElements()} />&nbsp; Add to basket</button>
                    <div className="flex text-currys-primary justify-end">
                        <button className=" px-5"><FontAwesomeIcon className="my-auto" icon="share-nodes"  onClick={() => handleWrongElements()}/>&nbsp; Share</button>
                    </div>
                </div>
        </>
    )
}

export default ProductCheckout;