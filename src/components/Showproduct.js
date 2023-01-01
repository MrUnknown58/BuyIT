import React,{useContext} from "react";
import axios from "axios";
import { BackendAPIContext } from "../ContextAI/BackendAPI";


export default function Showproduct(result) {
  const d = useContext(BackendAPIContext);
  const approve=(n)=>{
    axios({
      method: "post",
      url: d.productsurl + "ApproveProduct",
      data: {"Sl_No": n},
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        // document.getElementById("tologin").click();
        result=response;
      })
      .catch(function (response) {
        //handle error
        // console.log(response);
      });

  };
  return (
    <>
      <div key={result.SL_No} className="p-4 my-4">
         <a className="block relative h-48 rounded overflow-hidden" href="/">
           <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={result.imageurl}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {result.ProductName}
          </h2>
          <p className="mt-1">Rs.{result.Price}</p>
        </div>
        {/* grid grid-cols-1 space-x-2 space-y-2 */}
        <div className="lg:space-x-2 mt-4 space-y-4" key={result.SL_No}>
          <button className=" bg-green-400 rounded-md text-white w-20 lg:my-10 h-8 hover:bg-blue-500" onClick={()=>{
            approve(result.Sl_No);
            }}>
            Approve
          </button>
          <button className=" bg-red-400 rounded-md w-20 text-white lg:my-10 h-8 hover:bg-blue-500">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
