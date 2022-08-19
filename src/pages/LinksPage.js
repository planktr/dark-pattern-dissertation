import React from "react";
import { Link } from "react-router-dom";
import cat from '../drawkit-daily-life-vector-illustration-01.png'

const Links = () => (
  <section className="flex h-screen bg-dark text-gray-200 text-lg font-main px-6 pb-8">
    <div className="w-2/3 mt-24 pl-12 pr-8">
      <h1 className="text-xl uppercase">If you are interested to learn more about dark patterns...</h1>
      <p className="mt-4 pb-8">
        Check out the website and articles below:
      </p>
      <span className="block my-8">Deceptive Design Website- <a href="https://www.deceptive.design/" className="text-md text-cyan-200 hover:text-cyan-400 underline duration-150">https://deceptive.design/</a></span>
      <span className="block my-8">Mathur, A et al. (2019)- <a href="https://dl.acm.org/doi/pdf/10.1145/3359183?casa_token=8shlZHO5j94AAAAA:1fp1-n1kQQ8XggyXC1ByYCk7cnuYDyq6e_46IQFhOAptwdCQdftgM-cw6kvaaOnQ8wR5Af3Cxg" className="text-md text-cyan-200 hover:text-cyan-400 underline duration-150">
        Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites 
      </a></span>
      <span className="block my-8">Mathur,A et al. (2021)- <a href="https://dl.acm.org/doi/abs/10.1145/3411764.3445610?casa_token=Gt0lzd3va5IAAAAA:OHBV-dRkP3jD6A6EkeOA8j3WypbfHFMpZ8JEBBEj0kkGjhH8BRvf-1LgwJjHvVKYMPPuqE675Ek" className="text-md text-cyan-200 hover:text-cyan-400 underline duration-150">
        What Makes a Dark Pattern... Dark? Design Attributes, Normative Considerations, and Measurement Methods
      </a></span>
      <span className="block my-8">Trice, M & Potts, L (2018)- <a href="https://www.researchgate.net/profile/Michael-Trice/publication/337155548_Building_Dark_Patterns_into_Platforms_How_GamerGate_Perturbed_Twitter's_User_Experience/links/5dc86bc692851c8180435536/Building-Dark-Patterns-into-Platforms-How-GamerGate-Perturbed-Twitters-User-Experience.pdf" className="text-md text-cyan-200 hover:text-cyan-400 underline duration-150">
        Building dark patterns into platforms: How GamerGate perturbed Twitter's user experience
      </a></span>
    </div>
    <figure className="w-1/3 relative">
      <img className="absolute bottom-0 max-w-full h-auto" src={cat} alt="" />
    </figure>
  </section>
);

export default Links;