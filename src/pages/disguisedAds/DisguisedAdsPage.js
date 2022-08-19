import React, { useEffect } from "react";
import SoftwareDownload from './SoftwareDownload';
import MisleadingAds from './MisleadingAds';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { wrongElement } from '../../app/testSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Instructions } from "../../components/Instructions";

const Test2 = ({ setModalHelpText }) => {

    let { testId } = useParams();
    const dispatch = useDispatch();

    const handleWrongElements = () => dispatch(wrongElement({ testId: testId, stageId: 1 }));


    useEffect(() => {
        const helpText = "test 2";
        setModalHelpText(helpText);
    }, [])

    return (
        <>
            <Instructions bodyText={"Q. Find all the deceptive design elements in this page:"}/>
            <section className='mx-4 my-2'>
                <div className='flex justify-between'>
                    <h2 className='text-blue-900 text-3xl py-3 font-mono font-semibold'><FontAwesomeIcon className="pr-4" icon="square-virus"/>AnthemScore (Mac)</h2>
                    <form className="flex my-3">
                        <input className="w-4/5 p-2 rounded-l-lg border bg-slate-100 border-slate-300 outline-none placeholder:tracking-tight placeholder:text-blue-900" type="text" placeholder="Search..." onClick={() => handleWrongElements()} />
                        <button disabled={true} className="bg-blue-900 border-slate-300 rounded-r-lg text-white w-1/5 p-2"><FontAwesomeIcon icon="magnifying-glass" /></button>
                    </form>
                </div>
                <section className="flex h-screen w-full">
                    <div className="w-3/12">
                        <SoftwareDownload />
                    </div>
                    <MisleadingAds/>
                </section>
            </section>
        </>
    )

}

export default Test2;