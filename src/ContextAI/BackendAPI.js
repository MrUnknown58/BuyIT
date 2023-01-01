import { createContext } from "react";

const BackendAPIContext = createContext();
const BackendAPIProvider=(props)=>{
    // const url="http://localhost:8083/Home/";
    // const productsurl="http://localhost:8083/Products/";
    const fetchcategorywise="https://dummyjson.com/products/category/";
    const fetchallproducts="https://dummyjson.com/products";
    const singleproductdata="https://dummyjson.com/products/";
let categories=[
  {
    "name":"SmartPhones",
    "type":"Gadgets",
    "shortdesc":"Grab Latest Smartphones at 50% Off",
    "url":"https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnRwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "category":"smartphones"
  },
  {
    "name":"laptops",
    "type":"Gadgets",
    "shortdesc":"Grab Latest Deals & Offers on Laptops.",
    "url":"https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8TGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "category":"laptops",
  },
  {
    "name":"Fragrances",
    "type":"Daily Use",
    "shortdesc":"Grab Body Odour at 30% Off",
    "url":"https://images.unsplash.com/photo-1620733723572-11c53f73a416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhZ25hbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "category":"fragrances",
  },
  {
    "name":"Skincare",
    "type":"Daily Use",
    "shortdesc":"Grab Mamaearth at 90% Off",
    "url":"https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8U2tpbmNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "category":"skincare",
  },
  {
    "name":"Groceries",
    "type":"Home Use",
    "shortdesc":"Get Fresh Deals in Groceries",
    "url":"https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8R3JvY2VyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "category":"groceries",
  },
  {
    "name":"Furnitures",
    "type":"Room Decor",
    "shortdesc":"Grab Latest Deals here",
    "url":"https://plus.unsplash.com/premium_photo-1663013668671-d453f319544f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8RnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "category":"furniture",
  },
  {
    "name":"Tops",
    "type":"Girl Clothing",
    "shortdesc":"Grab Hot Deals at 90% Off",
    "url":"https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8VG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "category":"tops",
  },
  {
    "name":"Womens Dresses",
    "type":"Women Clothing",
    "shortdesc":"Grab Some Comfy wear at 70% Off",
    "url":"https://images.unsplash.com/photo-1602010069450-0a62034f235c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fFdvbWVuJTIwRHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "category":"womens-dresses",
  },
  {
    "name":"Womens Shoes",
    "type":"Shoe Wear",
    "shortdesc":"Grab Some Comfy wear at 30% Off",
    "url":"https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8V29tZW4lMjBTaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "category":"womens-shoes",
  },
  {
    "name":"Mens Shirts",
    "type":"Mens Clothing",
    "shortdesc":"Grab Some Comfy wear at 10% Off",
    "url":"https://images.unsplash.com/photo-1585518126763-5146ad8837a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8TWVuJTIwU2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "category":"mens-shirts",
  },
  {
    "name":"Mens Shoes",
    "type":"Shoe Wear",
    "shortdesc":"Grab Some Comfy wear at 90% Off",
    "url":"https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fE1lbiUyMFNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "category":"mens-shoes",
    
  },
  {
    "name":"Mens Watches",
    "type":"Hand wear",
    "shortdesc":"Grab some latest watches wear at 60% Off",
    "url":"https://images.unsplash.com/photo-1662230176801-f5a06253a940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8TWVuJTIwV2F0Y2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "category":"mens-watches",
  },
  {
    "name":"Womens Watches",
    "type":"Hand Wear",
    "shortdesc":"Grab Some latest watches at 60% Off",
    "url":"https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8V29tZW4lMjBXYXRjaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "category":"womens-watches",
  },
  {
    "name":"Womens Bags",
    "type":"Bagpack",
    "shortdesc":"Grab Some Cool Bags at 10% Off",
    "url":"https://images.unsplash.com/photo-1587467512961-120760940315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8V29tZW4lMjBCYWdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "category":"womens-bags",
  },
  {
    "name":"Womens Jewelery",
    "type":"Jewelery",
    "shortdesc":"Grab these Jewelery today.",
    "url":"https://images.unsplash.com/photo-1577883751617-803a40e0057b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8SmV3ZWxlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "category":"womens-jewellery",
  },
  {
    "name":"Sunglasses",
    "type":"Eye Wear",
    "shortdesc":"Grab Sun Glasses at Lowest Price",
    "url":"https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "category":"sunglasses",
  },
  {
    "name":"Automotive",
    "type":"Cars",
    "shortdesc":"Here are some Cars for you",
    "url":"https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8QXV0b21vdGl2ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "category":"automotive",
  },
  {
    "name":"Motorcycle",
    "type":"Bikes",
    "shortdesc":"Here something for Bikers",
    "url":"https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8TW90b3JjeWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "category":"motorcycle",
  },
]
    return(
        <BackendAPIContext.Provider value={{categories,fetchcategorywise,fetchallproducts,singleproductdata}}>{props.children}</BackendAPIContext.Provider>
    );
}
export {BackendAPIContext,BackendAPIProvider};


// import {createContext,useState} from 'react';
// // const AppContext = createContext();
// const BackendAPIContext = createContext();
// const BackendAPIProvider = (props)=>{
//   const s={
//     "name" :"sanu",
//     "surname" :"singh",
//   }
//   const [isNavOpen, setisNavOpen] = useState(false);
//   const update=()=>{
//     setisNavOpen(!isNavOpen);
//     console.log(!isNavOpen);
//   }
//   return(
//         <BackendAPIContext.Provider value={{s,update}}>{props.children}</BackendAPIContext.Provider>
//     );
// }
// export {BackendAPIProvider,BackendAPIContext};