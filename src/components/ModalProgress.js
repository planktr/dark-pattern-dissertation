import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ModalProgress = ({ isOpen, onClose, proceed, bodyText}) => {

  return (
    <>

      {isOpen ? (
        <>
          <aside className="font-main justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-slate-800 bg-opacity-30" >
            <div className="relative my-6 mx-auto min-w-2xl max-w-3xl ">
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-dark text-gray-200 outline-none fadeIn">
                {/*header*/}
                <figure className="flex justify-center px-5 mt-7 text-amber-500">

                  <FontAwesomeIcon className="text-7xl" icon={["far","face-grin-stars"]} />

                </figure>
                {/*body*/}
                <div className="relative px-6 flex-auto">
                  <h3 className="text-2xl mt-5 text-amber-500">
                    You found the dark pattern lurking inside this page!
                  </h3>
                  <p className="my-6 text-lg">
                    <FontAwesomeIcon className="mr-2" icon={["far", "lightbulb"]} />
                    {bodyText}
                  </p>
                  <span className="mt-4 text-lg font-light">
                    Learn more at the end of the quiz!
                  </span>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6">
                  {/* <button
                    className="hover:text-emerald-500 px-4 py-2 ease-linear transition-all"
                    type="button"
                    onClick={onClose}
                  >
                    Close
                   <FontAwesomeIcon icon={["far", "circle-xmark"]} />
                  </button> */}
                  <button
                    className="hover:text-emerald-400 bg-gray-800 hover:bg-gray-900 px-4 py-2 shadow hover:shadow-lg ease-linear transition-all"
                    type="button"
                    onClick={proceed}
                  >
                    Next task <FontAwesomeIcon icon="chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </>
      ) : null}
    </>
  );
}