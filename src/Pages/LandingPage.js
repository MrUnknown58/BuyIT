import React from "react";
import {Link} from 'react-router-dom'

export default function LandingPage(props) {
  return (
    <>
      <div className="container">
        <div className="grid grid-rows-2 grid-flow-col gap-4 mt-10 space-y-10 place-items-center">
        <div className="relative">
            <div className="absolute top-0 -left-4 w-36 h-36 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1 left-40 w-36 h-36 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-36 h-36 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="m-8 relative space-y-4">
              <div>
                <img
                  src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-beautiful-hologram-water-color-frame-png-image_3643167.jpg"
                  className="p-10 h-56 z-0"
                  alt="/"
                />
              </div>
            </div>
          </div>
          <div className="font-bold text-center">
              {props.title} 
              <div className="lg:ml-[35%] lg:w-1/3 text-center justify-center mt-2 font-normal text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores, eum blanditiis? Quos corporis quas tempora, veniam rem
                recusandae architecto illum. Expedita minus temporibus laborum
                hic autem veniam maxime ducimus totam?
              </div>
              <button className="mx-auto bg-blue-400 rounded-md w-20 m-10 h-8 hover:bg-blue-500">
              <Link to="/products"><span className="text-white">Shop Now</span></Link>
            </button>
            </div>
            
        </div>
        </div>
    </>
  );
}
