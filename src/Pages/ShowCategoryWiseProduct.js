import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { BackendAPIContext } from '../ContextAI/BackendAPI';
import Cardpsuedo from './Cardpsuedo';
export default function ShowCategoryWiseProduct() {
  const category=useParams().category;
  const a=useContext(BackendAPIContext).fetchcategorywise;
  const [result, setresult] = useState(null);
  const fetchdata=()=>{
    axios({
      method: "get",
      url: a+category,
    }).then(function (response) {setresult(response.data);}).catch(function (response) {});
  }
  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line
  },[])
  
  return (
    <>
    <section className='container grid grid-cols-3 px-44'>
      {(result!==null)?result.products.map((element)=>{
        // console.log(element);
        return <Cardpsuedo element={element} key={element.id}/>
      }):''}
    </section>
    </>
  )
}
