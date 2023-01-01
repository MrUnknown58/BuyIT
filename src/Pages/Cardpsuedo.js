import React from 'react'
import styles from "../styles/styles.module.css";
import { motion,AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

export default function Cardpsuedo(props) {
  return (
    <>
    {/* {console.log(props.element)} */}
    <Link to={`singleproduct/${props.element.id}`}>
    <AnimatePresence mode='exit'>
      <motion.div 
      animate={{x:[-400,200,0]}}
      exit={{x:[0,-200,400]}}
    // transition={{delay:3}}></motion.div>
    >
    <section className={styles.a}>
         <div className="p-4">
                <div className="bg-white pb-14 bg-opacity-75 px-8 pt-3 rounded-lg overflow-hidden text-center h-[600px] relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {props.element.category}
                  </h2>
                  <img className="h-[60%] object-contain md:object-scale-down rounded cursor-pointer md:w-full object-center mb-6" src={props.element.thumbnail} alt="content"/>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {props.element.title}
                  </h1>
                  <p className="h-[70px] text-ellipsis overflow-hidden leading-relaxed mb-3">
                    {props.element.description}
                  </p>
                  <div className='text-left'>
                  <p>Brand:<span className='pl-5 font-bold'>{props.element.brand}</span></p>
                  <p>Price: <span className='pl-5 font-bold'>Rs.{props.element.price}</span></p>
                  <p>Rating: <span className='pl-3 font-bold'>{props.element.rating}/5</span></p>
                  
                  </div>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
              </section>
              </motion.div>
              </AnimatePresence>  
              </Link>
              
    </>

  )
}
