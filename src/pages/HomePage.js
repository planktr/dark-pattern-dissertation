import React from "react";
// import { Hello } from '../Hello';
// import { HelloButton } from '../components/Button';
import { Link } from "react-router-dom";
import background from '../DrawKit-Vector-Illustration-ecommerce-091.png';

const Home = () => {
    return (
      <>
      <h2 className="hidden">Home</h2>

      <section className="flex bg-dark h-screen font-main text-gray-200 px-6">
        <figure className="w-7/12">
          <img class="top-0 max-w-full h-auto" src={background} alt="" />
        </figure>
        <div className="flex flex-col space-y-8 justify-center w-5/12 pr-12 mb-8">
          <p className="text-lg">You might have seen dark patterns daily without recognising them; these customer unfriendly practices should not go undetected. <br/><br/>
              This project is designed to present some common dark patterns on the Internet through interactive means, so as to increase the public awareness of these deceptive designs.
          </p>
          <span className="pt-5 pb-12"><Link className="border-2 rounded-lg border-gray-400 hover:text-emerald-500 hover:border-emerald-500 duration-150 px-5 py-3" to="/test/1/stage/1">Start the test here</Link></span>
        </div>
      </section>
      </>
    );
  };

export default Home;