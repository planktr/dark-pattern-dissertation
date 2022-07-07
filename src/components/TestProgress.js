import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActivityMessage from "../pages/activityMessage/ActivityMessagePage";
import Test2 from "../pages/disguisedAds/DisguisedAdsPage";
import { Instructions } from "./Instructions";
import { ModalHelp } from "./HelpButton";

const TestProgress = () => {

    const { testId } = useParams();

    const testNavDisplay = "flex font-main items-center py-4 px-6 h-20 border-b border-emerald-600 ";
    const activeTest = (isActive) => isActive ? testNavDisplay+"bg-emerald-600 text-white" : testNavDisplay+"text-white" ;

    return (
        <div className="flex flex-row justify-bewteen h-full">
            <section className="flex flex-col w-48 shadow-md bg-dark">
                <ul className="">
                    <li className="">
                        <span className={activeTest(testId==="1")}>Test 1</span>
                    </li>
                    <li className="">
                        <span className={activeTest(testId==="2")}>Test 2</span>
                    </li>
                    <li className="">
                        <span className={activeTest(testId==="3")}>Test 3</span>
                    </li>
                    <li className="">
                        <span className={activeTest(testId==="4")}>Test 4</span>
                    </li>
                </ul>

                <ModalHelp styles={" text-4xl p-1 mx-1 my-10 text-white hover:text-emerald-500 duration-150"}><FontAwesomeIcon icon={["far","circle-question"]} /></ModalHelp>
            </section>

            <section className="w-full">
                <Instructions />
                {(testId==="1") ? (<ActivityMessage />) : null}  
                {(testId==="2") ? (<Test2 />): null} 
                {(testId==="3") ? "This will be test 3" : null} 
                {(testId==="4") ? "This will be test 4" : null} 
            </section>

        </div>
    )
};

export default TestProgress;