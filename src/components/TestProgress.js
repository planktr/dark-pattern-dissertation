import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActivityMessage from "../pages/activityMessage/ActivityMessagePage";
import DisguisedAdsPage from "../pages/disguisedAds/DisguisedAdsPage";
import { ModalHelp } from "./HelpButton";
import { useState } from "react";

const TestProgress = () => {

    const { testId } = useParams();

    const testNavDisplay = "flex font-main items-center py-4 px-6 h-20 border-b border-emerald-600 ";
    const activeTest = (isActive) => isActive ? testNavDisplay+"bg-emerald-600 text-white" : testNavDisplay+"text-white" ;

    const [modalHelpText, setModalHelpText] = useState();

    return (
        <div className="flex flex-row justify-bewteen h-full">
            <section className="flex flex-col w-48 h-auto shadow-md bg-dark">
                <ul className="text-base">
                    <li className="">
                        <span className={activeTest(testId==="1")}>Test 1</span>
                    </li>
                    <li className="">
                        <span className={activeTest(testId==="2")}>Test 2</span>
                    </li>
                    {/* <li className="">
                        <span className={activeTest(testId==="3")}>Test 3</span>
                    </li> */}
                </ul>

                <ModalHelp styles={"flex flex-col space-y-2 items-center text-4xl mx-2 p-1 mx-auto my-10 text-white hover:text-emerald-500 duration-150 font-main"} bodyText={modalHelpText}>
                    <FontAwesomeIcon icon={["far","circle-question"]} />
                    <span className="text-start text-base">Hint for what to do</span>
                </ModalHelp>
            </section>

            <section className="w-full">
                {(testId==="1") ? (<ActivityMessage setModalHelpText={setModalHelpText} />) : null}  
                {(testId==="2") ? (<DisguisedAdsPage setModalHelpText={setModalHelpText} />): null} 
                {/* {(testId==="3") ? "This will be test 3" : null}  */}
            </section>

        </div>
    )
};

export default TestProgress;