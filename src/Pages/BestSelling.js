import React, { useContext } from "react";
import { BackendAPIContext} from "../ContextAI/BackendAPI";
import NewArrivals from "./NewArrivals";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper";
import 'swiper/css/autoplay';

// import Slider from '../components/Slider.js'
import CategoriesSlider from "../components/CategoriesSlider";
import { Link } from "react-router-dom";
const BestSelling = () => {
  const a=useContext(BackendAPIContext).categories;
  return (
    <>
      <section className=" bg-white cursor-grab">
        <div>
          <div className="text-3xl font-bold text-center p-10">
            Our Customer's Best Picks
          </div>
        </div>
        <section className="container bg-white pb-[10]">
    <Swiper
      navigation={true}
      modules={[Navigation,Autoplay]}
      // slidesPerView={3}
      spaceBetween={30}
      className="mySwiper"
      loop={true}
      autoplay={true}
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
    {a.map((element,index)=>{
      return <SwiperSlide key={index}><CategoriesSlider element={element} key={index}/></SwiperSlide>
    })} 
    </Swiper>
    </section>
        <div className="px-0">
                <img className="object-cover py-10 md:h-[512px] w-full" src='https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1792/cms/5wxKRzYCaSNQwBGE6DikkE/64ffd6b472fab937796b63ed25037adb/Desktop-Secondary-Hero-WRM-min.jpg' alt=""/>
                <p className="text-black text-center px-16 pt-10 font-mono text-xl font-bold">Jingle All The Way In Any Weather</p>
                <p className="text-center px-16">The weather-repellent Mizzle Collection is ready to keep you cozy.</p>
          <div className="flex justify-center space-x-6 mt-4">
          <Link to={`searcheditems/${"man"}`}><button className="text-white bg-black hover:bg-white hover:border-2 border-2 hover:text-black border-black px-6 py-2">Shop MEN</button></Link>
          <Link to={`searcheditems/${"women"}`}> <button className="text-white bg-black hover:bg-white hover:border-2 border-2 hover:text-black border-black px-6 py-2">Shop WOMEN</button></Link>
          </div>
        </div>
      </section>
      <NewArrivals/>
    </>
  );
};

export default BestSelling;
