import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import congrats from "../success.png";
import { useDispatch } from 'react-redux';
import { endTimer } from '../app/testSlice';


export const Result = () => {
    const dispatch = useDispatch();

    const testResults = useSelector(state => state.tests);

    const test1Results = testResults.results[1][1];
    const test2Results = testResults.results[2][1];
    const totalErrors = test1Results.errors + test2Results.errors;
    const completionTime = new Date(testResults.timer.end - testResults.timer.start);
    const completionTimeText = `${completionTime.getMinutes()} minutes and ${completionTime.getSeconds()} seconds`


    useEffect(() => {
        dispatch(endTimer({ endTime: Date.now() }));
    }, [])

    return (
        <section className="mx-auto font-main h-auto bg-dark text-white">
            <div className="flex mx-auto w-4/5 py-20">
                <figure className="w-5/12">
                    <img className="top-0 mx-auto" src={congrats} alt="" />
                    <figcaption className="text-center text-xs text-slate-400"><a href="https://iconscout.com/illustrations/success">Success Illustration</a> by <a className="underline" href="https://iconscout.com/contributors/pixel-true-designs">Pixel True</a></figcaption>
                </figure>
                <div className="flex flex-col space-y-8 justify-center w-7/12 pr-12 mb- text-lg">
                    <h2 className="text-3xl">Congrats! You have completed the test<FontAwesomeIcon className="pl-2" icon="hands-clapping"/><br/> Here's your result:</h2>
                    <ul className="ml-4 space-y-3">
                        <li><FontAwesomeIcon className="text-white pr-2" icon={["far", "lightbulb"]} />It took you <span className="text-amber-500">{completionTimeText}</span> to finish the game.</li>
                        <li><FontAwesomeIcon className="text-white pr-2" icon={["far", "lightbulb"]} />Throughout the test, you have misidentified <span className="text-amber-500">{totalErrors}</span> elements as dark patterns (by clicking other responsive elements).</li>
                    </ul>
                    <p>I hope the test has enlightened/ showed you some common deceptive designs that you might encountered on the Internet but wasn't aware of.</p>
                    <p><Link className="underline text-emerald-500 hover:text-emerald-600" to="/links">Learn more</Link> about other types of dark pattern and the reseraches that had been done on this field.</p>
                </div>
            </div>
        </section>

    )
}