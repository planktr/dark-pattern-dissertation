import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { completed, wrongElement } from '../../app/testSlice';
import { ModalProgress } from "../../components/ModalProgress";
import ad1 from '../../ad1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs } from "../../components/Tab";

const MisleadingAds =() => {;

    // const [showModal, setShowModal] = React.useState(false);
    const [hasClickedAd1, setHasClickedAd1 ] = React.useState(false);
    const [hasClickedAd2, setHasClickedAd2 ] = React.useState(false);

    const showModal = hasClickedAd1 && hasClickedAd2;

    // useEffect(() => {
    //     console.log('hiya', hasClickedAd1 && hasClickedAd2);
    //     setShowModal(hasClickedAd1 && hasClickedAd2);
    // }, [hasClickedAd1, hasClickedAd2])

    const handleCloseModal = () => {
        setHasClickedAd1(false);
        setHasClickedAd2(false);
    }

    const dispatch = useDispatch();
    let { testId } = useParams();

    const handleCompletion = () => dispatch(completed({ testId: 2, stageId: 1 }));
    const handleWrongElements = () => dispatch(wrongElement({ testId: testId, stageId: 1 }));

    let navigate = useNavigate({replace: true}); 
    const routeChange = () =>{ 
        handleCompletion();
        navigate("/result")
        // let path = `${++testId}`;
        // navigate("/test/"+path+"/stage/1")
    }

    console.log(hasClickedAd1, hasClickedAd2);
    return (
        <article className="flex flex-col w-9/12">
            <ModalProgress
                isOpen={showModal} 
                onClose={() => handleCloseModal()} 
                proceed={routeChange} 
                bodyText={"The two advert banners in this sample page were disguised as other kind of content and navigation, in order to trick you to click on them."}
            />
            <section className="flex justify-between border-y mb-4 py-3 font-semibold tracking-tight">
                <div className="flex space-x-3 text-blue-900">
                    <span>2,723 downloads</span>
                    <span>Updated: June 19, 2022</span>
                    <button className="hover:text-blue-700">Trial<FontAwesomeIcon className="pl-1" icon={["far","circle-question"]} onClick={() => handleWrongElements()}/></button>
                </div>
                <div className="flex">
                    <div className="text-sm">
                        <FontAwesomeIcon className="text-amber-500" icon="star"/>
                        <FontAwesomeIcon className="text-amber-500" icon="star"/>
                        <FontAwesomeIcon className="text-amber-500" icon="star"/>
                        <FontAwesomeIcon className="text-amber-500" icon="star"/>
                        <FontAwesomeIcon className="text-amber-500" icon="star-half-stroke"/>
                    </div>
                    <span className="pl-2 text-blue-900 font-normal">4.65/5</span>
                    <span className="pl-2 text-slate-700">3<FontAwesomeIcon className="text-slate-500 pl-1" icon="users"/></span>
                </div>
            </section>
            <button className="w-full border border-blue-900"  onClick={() => setHasClickedAd1(true)}>
                <img className="w-full h-auto hover:shadow-xl transition duration-200 ease-in-out" src={ad1} alt="" />
            </button>
            <Tabs setHasClickedAd2={() => setHasClickedAd2(true)} />


        </article>
    )
}

export default MisleadingAds;