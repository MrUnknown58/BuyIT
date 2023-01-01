import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { BackendAPIContext } from '../ContextAI/BackendAPI';
import Cardpsuedo from './Cardpsuedo';

const SearchedItems = () => {
    const c=useParams();
    const a=useContext(BackendAPIContext).fetchallproducts;
    console.log(c);
    // console.log(a);
    const [result, setresult] = useState(null);
  const fetchdata=()=>{
    axios({
      method: "get",
      url: a+"/search?q="+c.element,
    }).then(function (response) {setresult(response.data);
      console.log(result);
    }).catch(function (response) {console.log(response)});
  }
  useEffect(() => {
    setresult(null);
    fetchdata();
    // eslint-disable-next-line
  },[c])
 
  return (
    <>
  
    <section className='container grid md:grid-cols-3 md:px-44'>
      {(result!==null)?result.products.map((element)=>{
        // console.log(element);
        return <Cardpsuedo element={element} key={element.id}/>
      }):''}
    </section>
    </>
  )
}

export default SearchedItems