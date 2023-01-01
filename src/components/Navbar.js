import React, { useState } from "react";
import {VscAccount} from "react-icons/vsc"
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {FaOpencart} from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <section className="z-10">
      <div className="bg-green-900 text-white items-center py-3 font-mono">
        <div className="text-center text-xs font-bold">
          Run out of time on their gift? Fear not, there’s always gift cards.
          <span className="underline underline-offset-1 cursor-pointer">Shop Gift Cards</span>
          
        </div>
      </div>
      <div className={`bg-white border border-b-2`}>
        <div className="flex flex-col md:flex-row justify-between">
            <nav>
            <ul className="flex py-4 space-x-8 ml-10 font-mono font-light">
            <Link to={`searcheditems/${"man"}`}><li className="underline-offset-2 hover:underline hover:cursor-pointer">MEN</li></Link>
            <Link to={`searcheditems/${"women"}`}><li className="underline-offset-2 hover:underline hover:cursor-pointer">WOMEN</li></Link>
            <Link to={`searcheditems/${"kids"}`}>    <li className="underline-offset-2 hover:underline hover:cursor-pointer">KIDS</li></Link>
            <Link to={`searcheditems/${"sale"}`}>    <li className="underline-offset-2 hover:underline hover:cursor-pointer">SALE</li></Link>
            <Link to={`showcategorywiseproduct/${"groceries"}`}>   <li className="uppercase underline-offset-2 hover:underline hover:cursor-pointer">Groceries</li></Link>
            </ul>
        </nav>
        <Link to={"/"}>
        <div className="mt-5 font-mono font-bold hover:cursor-pointer text-center">allKites</div></Link>  
        <div>
        <nav>
            <ul className="flex py-4 space-x-5 ml-10 font-mono font-light">
                <li className="underline-offset-2 hover:underline hover:cursor-pointer">SUSTAINABILITY</li>
                <li className="underline-offset-2 hover:underline hover:cursor-pointer">RERUN</li>
                <li className="underline-offset-2 hover:underline hover:cursor-pointer">STORES</li>
                <Link to={"/login"}><VscAccount className="h-7 w-7 hover:cursor-pointer"/></Link>
                <AiOutlineQuestionCircle className="h-7 w-7 hover:cursor-pointer"/>
                <FaOpencart className="h-7 w-7 hover:cursor-pointer"/>
            </ul>
        </nav>
        </div>
        </div>
      </div>
      </section>
      
    </>
  );
};

export default Navbar;
