import React, {useState,useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { BackendAPIContext } from "../ContextAI/BackendAPI";
import Slider from '../components/Slider.js'
import Footer from "../components/Footer";
import 'swiper/css/autoplay';
import axios from "axios";
import { Link } from "react-router-dom";
// import Cardpsuedo from "./Cardpsuedo";
// import CategoriesSlider from "../components/CategoriesSlider";
export default function NewArrivals() {
  const a=useContext(BackendAPIContext).fetchallproducts;
  // console.log(a);
  const [result, setresult] = useState(null);
  const fetchdata=()=>{
    axios({
      method: "get",
      url: a+"?limit=10",
    }).then(function (response) {setresult(response.data);
    }).catch(function (response) {});
  }
  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line
  },[])
  return (
    <>
 <section className="container bg-white pb-[10]">
      <div className="text-3xl font-mono font-bold py-10">New Arrivals</div>
    <Swiper
      navigation={true}
      modules={[Navigation,Autoplay]}
      // slidesPerView={3}
      spaceBetween={30}
      autoplay={true}
      className="mySwiper"
      loop={true}
      // style={{"height":"279px"}}
      breakpoints={{
        576: {
          // width: 576,
          slidesPerView: 1,
        },
        768: {
          // width: 768,
          slidesPerView: 3,
        },
      }}
    >
      {(result!==null)?(result.products).map((element,index)=>{
      return <SwiperSlide key={index}><Slider element={element} key={index}/></SwiperSlide>
    }):''}
    
    </Swiper>
    </section> 
    <div className="pb-10 px-0 pt-24 bg-white">
                <img className="object-cover md:h-[512px] w-full" src='https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1440/cms/2pQcaFwbQee2G3NH9aK0c6/27e03bd35193fa8822f2166fdd40476f/Desktop-Secondary-Hero-Dweller1a.jpg' alt=""/>
                <p className="text-black text-center px-16 pt-10 font-mono text-4xl font-bold">Your New Favorite House Shoes</p>
                <p className="text-center md:px-96 text-base">Slip off the world’s coziest shoes and slip on the world’s coziest slippers, designed to be the perfect gift for everyone on your list.</p>
          <div className="flex justify-center mt-4">
          <Link to={`searcheditems/${"shoes"}`}><button className="text-lg uppercase text-white bg-black hover:bg-white hover:border-2 border-2 hover:text-black border-black px-5 md:px-36 md:py-2 ">Shop Shoes</button></Link>
          </div>
        </div>
    <Footer/>
    </>
  )
}
