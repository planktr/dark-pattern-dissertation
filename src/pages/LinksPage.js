import React from "react";
import { Link } from "react-router-dom";
import cat from '../drawkit-daily-life-vector-illustration-01.png'

const Links = () => (
  <section className="flex h-screen bg-dark text-gray-200 text-lg font-main px-6 pb-8">
    <div className="w-2/3 mt-24 pl-12 pr-8">
      <h1 className="text-xl uppercase">If you are interested to learn more about dark patterns...</h1>
      <p className="mt-4 pb-8">
        Click the external links below:
      </p>
      <span className="block my-8">Deceptive Design Website- <Link to={{ pathname: "https://www.deceptive.design/" }} className="text-md text-cyan-300 hover:text-cyan-400 underline duration-150" target="_blank">https://deceptive.design/</Link></span>
      <span className="block my-8">Mathur et al. (2019) -Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites- <Link to={{ pathname: "https://dl.acm.org/doi/pdf/10.1145/3359183?casa_token=8shlZHO5j94AAAAA:1fp1-n1kQQ8XggyXC1ByYCk7cnuYDyq6e_46IQFhOAptwdCQdftgM-cw6kvaaOnQ8wR5Af3Cxg" }} className="text-md text-cyan-200 hover:text-cyan-300 underline duration-150" target="_blank">https://dl.acm.org/doi/pdf/10.1145/3359183?casa_token=8shlZHO5j94AAAAA:1fp1-n1kQQ8XggyXC1ByYCk7cnuYDyq6e_46IQFhOAptwdCQdftgM-cw6kvaaOnQ8wR5Af3Cxg/</Link></span>
    </div>
    <figure className="w-1/3 relative">
      <img className="absolute bottom-0 max-w-full h-auto" src={cat} alt="" />
    </figure>
  </section>
);

export default Links;