import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { wrongElement } from '../app/testSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cat from '../add2.png'


export const Tabs = ({ setHasClickedAd2 }) => {
    

    let { testId } = useParams();
    const dispatch = useDispatch();

    const handleWrongElements = () => dispatch(wrongElement({ testId: testId, stageId: 1 }));

    return (
        <section className="min-h-64 mt-6 mb-4 tracking-tighter relative">
            <div className="flex justify-between text-sm uppercase">
                <ul class="nav text-blue-800 flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0" id="tabs-tab"
                role="tablist">
                    <li class="" role="presentation">
                        <a href="#tabs-home" class="
                        nav-link
                        block
                        font-medium
                        leading-tight
                        uppercase
                        border-x border-white border-t-0 border-b-2
                        px-6
                        py-3
                        bg-gray-50
                        focus:bg-gradient-to-b focus:from-gray-300 focus:to-gray-50
                        active
                        " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                        aria-selected="true"
                        onClick={() => handleWrongElements()}>Review</a>
                    </li>
                    <li class="" role="presentation">
                        <a href="#tabs-profile" class="
                        nav-link
                        block
                        font-medium
                        leading-tight
                        uppercase
                        border-x border-white border-t-0 border-b-2
                        px-6
                        py-3
                        bg-blue-900 hover:bg-blue-800 text-white
                        " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                        aria-controls="tabs-profile" aria-selected="false"
                        onClick={() => handleWrongElements()}>Free Download</a>
                    </li>
                    <li class="" role="presentation">
                        <a href="#tabs-messages" class="
                        nav-link
                        block
                        font-medium
                        leading-tight
                        uppercase
                        border-x border-white border-t-0 border-b-2
                        px-6
                        py-3
                        bg-gray-50
                        focus:bg-gradient-to-b focus:from-gray-300 focus:to-gray-50
                        " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                        aria-controls="tabs-messages" aria-selected="false"
                        onClick={() => handleWrongElements()}>Specifications</a>
                    </li>
                    <li class="" role="presentation">
                        <a href="#tabs-messages" class="
                        nav-link
                        block
                        font-medium
                        leading-tight
                        uppercase
                        border-x border-white border-t-0 border-b-2
                        px-6
                        py-3
                        bg-gray-50
                        focus:bg-gradient-to-b focus:from-gray-300 focus:to-gray-50
                        " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                        aria-controls="tabs-messages" aria-selected="false"
                        onClick={() => handleWrongElements()}><FontAwesomeIcon icon="camera" /></a>
                    </li>
                </ul>
                <div className="flex space-x-2 my-auto">
                    <span className="text-blue-700"><FontAwesomeIcon className="mr-1" icon="circle-check"/>100% clean</span>
                    <button className="text-gray-500 hover:text-gray-700 uppercase tracking-tighter"><FontAwesomeIcon className="mr-1" icon="circle-info"/>Report malware</button>
                </div>
            </div>
            <div class="tab-content mt-1 py-4 bg-gray-50 absolute top-9 w-full" id="tabs-tabContent">
                <div class="tab-pane fade show active text-blue-900 px-2 text-xl font-bold" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                    <h4 className="text-2xl mr-32">Effortlessly create music sheets from your favorite songs or the tracks you are working on using this user-friendly software solution</h4>
                     <div className="text-sm mt-5">
                        <span className="text-black text-lg mr-5">AnthemScore</span>
                        <FontAwesomeIcon className="text-red-800" icon="star"/>
                        <FontAwesomeIcon className="text-red-800" icon="star"/>
                        <FontAwesomeIcon className="text-red-800" icon="star"/>
                        <FontAwesomeIcon className="text-red-800" icon="star"/>
                        <FontAwesomeIcon className="text-red-800" icon="star-half-stroke"/>
                        <span className="ml-2">4.3/5</span>
                        <p className="text-black text-base">Reviewed by <button className="underline text-blue-900">Adeel Greer</button> on <span className="font-bold">February 29, 2016</span></p>
                    </div>
                    <hr className="my-6"/>
                    <div className="space-x-3 text-black text-lg font-normal">
                        <div className="flex space-x-2 px-3 mb-4">
                            <p className="w-7/12 ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p><br/>
                            <button className="w-5/12"  onClick={() => setHasClickedAd2()}>
                                <img className="w-full hover:shadow-xl" src={cat} alt="" />
                            </button>
                        </div>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
                    </div>

                </div>
                <div class="tab-pane fade text-lg font-bold" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                    <div className="flex items-center py-6 space-x-4 px-4">
                        <button className="font-semibold uppercase hover:text-blue-700">
                            <FontAwesomeIcon className="text-red-500 pr-1" icon="shopping-basket"/>
                            Buy now $28.00<br/>
                            <span className="block ml-6 text-start text-slate-500 text-sm font-semibold">Lite</span>
                        </button>
                        <button className="font-semibold uppercase hover:text-blue-700">
                            <FontAwesomeIcon className="text-red-500 pr-1" icon="shopping-basket"/>
                            Buy now $38.00<br/>
                            <span className="block ml-6 text-start text-slate-500 text-sm font-semibold">Standard</span>
                        </button>
                        <button className="font-semibold uppercase hover:text-blue-700">
                            <FontAwesomeIcon className="text-red-500 pr-1" icon="shopping-basket"/>
                            Buy now $48.00<br/>
                            <span className="block ml-6 text-start text-slate-500 text-sm font-semibold">Professional</span>
                        </button>
                    </div>
                </div>
                <div class="tab-pane text-xl fade w-screen p-4" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                    <h4 className="text-blue-900 font-bold ml-4">LIMITATIONS IN THE UNREGISTERED VERSION</h4>
                        <ul className="flex flex-col text-lg space-y-1 list-disc ml-8">
                        <li>The European languages are members of the same family.</li>
                        <li>Their separate existence is a myth.</li>
                        <li>For science, music, sport, etc, Europe uses the same vocabulary.</li>
                    </ul>
                </div>
                <div class="tab-pane fade" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab">
                    Tab 4 content
                </div>
            </div>
        </section>
    )
}