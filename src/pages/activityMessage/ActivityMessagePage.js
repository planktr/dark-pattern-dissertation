import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ModalProgress } from '../../components/ModalProgress';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductHeader from "./ProductHeader";
import ProductCheckout from "./ProductCheckout";
import { useDispatch } from 'react-redux';
import { completed, startTimer } from '../../app/testSlice';
import { Instructions } from "../../components/Instructions";



const ActivityMessage = ({ setModalHelpText }) => {

    let { testId } = useParams();

    const dispatch = useDispatch();
    const handleCompletion = () => dispatch(completed({ testId: testId, stageId: 1 }));

    const [showModal, setShowModal] = React.useState(false);
    const [showButton, setShowButton] = React.useState(true);

    useEffect(() => {
        if(!showModal) {
            if(showButton) {
                setTimeout(() => {
                    setShowButton(false);
                }, 8000)
            } else {
                setTimeout(() => {
                    setShowButton(true);
                }, 20000);        
            }
        }
      }, [showButton, showModal]);

    useEffect(() => {
        const helpText = "test 1";
        setModalHelpText(helpText);
        dispatch(startTimer({ startTime: Date.now() }))
    }, [])


    let navigate = useNavigate({replace: true}); 
    const routeChange = () =>{ 
        handleCompletion();
        let path = `${++testId}`;
        navigate("/test/"+path+"/stage/1")
    }

    return (
        <>
            {showButton ? <button className="border rounded-xl px-8 py-4 top-[60%] left-[32%] z-40 bg-[#e9eaeb] text-center product-views fadeOut absolute hover:shadow-lg" onClick={() => setShowModal(true)}>
                <FontAwesomeIcon className="text-lg text-red-600" icon="fire-flame-curved" />
                <span className="product-views-text">&nbsp; Over 900 views in 24 hours</span>
            </button> : null}

            <ModalProgress 
                isOpen={showModal} 
                onClose={() => setShowModal(false)} 
                proceed={routeChange} 
                bodyText={"This sample page used Activity Message/ Pop-up to inform users of others' behaviour, so as to create a sense of urgency and invoke 'fear of missing out'."}
            />
            <Instructions bodyText={"Q. Find the component that can be considered to be a dark pattern:"}/>
            <article className="flex container w-full px-5 my-8">

                <div className="w-8/12">
                    <ProductHeader />
                </div>

                <ProductCheckout />
                
            </article>
        </>
    );

};

export default ActivityMessage;
