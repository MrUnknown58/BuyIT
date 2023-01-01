import React from "react";
import { Link } from "react-router-dom";
import BestSelling from "./BestSelling";
export default function Home() {
  return (
    <>
      {/* <div className='font-bold text-5xl'>
        This is Home...
    </div> */}
      {/* <LandingPage title="Welcome to House of Wonders..Wanna buy Something?Do Check Out Deal of the Day.."/> */}
      <section className="bg-no-repeat bg-center bg-cover min-h-[700px] min-w-[100%] object-cover md:w-full md:h-[647px] md:bg-[url('https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1599/cms/6dIQqSIlHIg43m2xO0a1dL/58c2e1c24e7e8f02d8c20850288f9dfa/Desktop-Hero-TR-01.png')] bg-[url('https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_826/cms/1Tm1VQhSTR7XTqcom4UiyW/5b6c5de872b8d2026ff2ab9f67ec43b9/Mobile-Hero-TR-01.png')]">
        <div className="flex-cols-1 md:flex-row">
          <div className="text-5xl text-white font-bold object-none object-left-bottom pt-96 pl-7 md:pl-24">
            Gifts For The Entire Family
          </div>
          <div className="text-white text-left font-bold pt-8 pl-7 md:pl-24">
            Spread comfort and joy with the world’s coziest gifts.
          </div>
          <div className="flex pl-10 md:pl-32 space-x-6 mt-4">
            <Link to={`searcheditems/${"man"}`}><button className="hover:text-white hover:bg-black text-black bg-white px-7 py-2">Shop MEN</button></Link>
            <Link to={`searcheditems/${"women"}`}><button className="hover:text-white hover:bg-black text-black bg-white px-6 py-2">Shop WOMEN</button></Link>
          </div>
        </div>
      </section>
      <BestSelling/>
    </>
  );
}
