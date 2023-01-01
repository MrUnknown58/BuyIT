import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BackendAPIContext } from "../ContextAI/BackendAPI";
import { Link } from "react-router-dom";

// import { AppContext } from '../ContextAI/statescontext';
// import {useEffect} from 'react'
export default function Product() {
  const d = useContext(BackendAPIContext);

  const [productlist, setproductlist] = useState();

  const getProducts = async () => {
    axios
      .get(d.productsurl + "ProductsAvailble")
      .then((response) => setproductlist(response.data));
    // let data = await fetch(d.url + "ProductsToApprove");
    // var parsedData = await data.json()
    // setproductlist(parsedData);
    // // console.log(parsedData);
    // // setproductlist(parsedData.articles);
  };
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  // const a=useContext(AppContext);
  // useEffect(() => {
  //   return a[3];
  //   // eslint-disable-next-line
  // }, []);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="py-24">
          <div className="flex lg:flex-row flex-wrap ml-10">
            {productlist !== undefined
              ? productlist.map((result) => {
                  // return (<Showproduct key={result.SL_No} {...result}/>)
                  return (
                    <>
                    
                      <div key={result.SL_No} className="w-[32%] p-4 my-4">
                      <Link to={`openproduct/${result.Sl_No}`}>
                        <a
                          className="block relative h-48 rounded overflow-hidden"
                          href="/"
                        >
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
                        </Link>
                      </div>
                    </>
                  );
                })
              : "NULL"}
          </div>
          <div className="flex flex-col items-center">
            {/* <!-- Help text --> */}
            <span className="text-sm text-gray-700 dark:text-gray-400">
              Showing <span className="font-semibold text-gray-900">1</span> to{" "}
              <span className="font-semibold text-gray-900 ">8</span> of{" "}
              <span className="font-semibold text-gray-900">100</span> Entries
            </span>
            {/* <!-- Buttons --> */}
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Prev
              </button>
              <button className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
