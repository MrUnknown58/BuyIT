import React, { useState, useContext, useEffect } from "react";
import { BackendAPIContext } from "../ContextAI/BackendAPI";
import axios from "axios";
// import Showproduct from "../components/Showproduct";
// import SIngleProduct from '../Pages/SingleProduct';
export default function ApproveProducts() {
  const d = useContext(BackendAPIContext);
  const [productlist, setproductlist] = useState();
  const getProducts = async () => {
    axios
      .get(d.productsurl + "ProductsToApprove")
      .then((response) => setproductlist(response.data));
    // let data = await fetch(d.url + "ProductsToApprove");
    // var parsedData = await data.json()
    // setproductlist(parsedData);
    // // console.log(parsedData);
    // // setproductlist(parsedData.articles);
    
  };
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
        // console.log(response);
        setproductlist(response.data);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

  };
  const del=(n)=>{
    axios({
      method: "post",
      url: d.productsurl + "DeleteProduct",
      data: {"Sl_No": n},
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        // document.getElementById("tologin").click();
        // console.log(response);
        setproductlist(response.data);
      })
      .catch(function (response) {
        //handle error
        // console.log(response);
      });

  };
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);
  // const approve=(n)=>{
  //   console.log(n.SL_No);
  // }
  // const addproduct=(result)=>{
  //   return (
      
          
  //     )
  // }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 lg:mx-24">
          <div className="grid grid-cols-3">
          {/* {console.log(productlist)} */}
          {
          (productlist!==undefined)?
          productlist.map((result) => {
            // return (<Showproduct key={result.SL_No} {...result}/>)
            return(
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
          <button className=" bg-red-400 rounded-md w-20 text-white lg:my-10 h-8 hover:bg-blue-500" onClick={()=>{
            del(result.Sl_No);
          }}
          >
            Delete
          </button>
        </div>
      </div>
              </>
            );
          }):'NULL'
          }
          </div>
        </div>
      </section>
    </>
  );
}
