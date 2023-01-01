// // import React, { useContext } from "react";
// // import { Link } from "react-router-dom";
// // // import { Link } from 'react-router-dom'
// // import Heroicon from "./Heroicon";
// // import { SiBuymeacoffee } from "react-icons/si";
// // import { AppContext } from "../ContextAI/statescontext";
// export default function Navbar() {
//   // const a = useContext(AppContext);
//   // const OpenMenu = () => {
//   //   a.ShowMenu();
//   // };
//   // const Closemenu = () => {
//   //   a.CloseMenu();
//   // };
//   // const logout = () => {
//   //   a.logout();
//   };
//   return (
//     <>
//       {/* <div className="flex items-center justify-between border-b border-gray-400 py-5">
//          <SiBuymeacoffee className="w-10 h-10" /> 
//         <div className="flex space-x-4 my-auto">
//           <nav>
//             <section className="MOBILE-MENU flex lg:hidden">
//               <div className="HAMBURGER-ICON space-y-2 mr-5" onClick={OpenMenu}>
//                 <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//                 <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//                 <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//               </div>
//               <div className={a.isNavOpen ? "showMenuNav" : "hideMenuNav"}>
//                 <div
//                   className="absolute top-0 right-0 px-8 py-8"
//                   onClick={Closemenu}
//                 >
//                   <svg
//                     className="h-8 w-8 text-gray-600"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <line x1="18" y1="6" x2="6" y2="18" />
//                     <line x1="6" y1="6" x2="18" y2="18" />
//                   </svg>
//                 </div>
//                 <ul className="flex flex-col items-center justify-between min-h-[250px]">
//                   <li className="border-b border-gray-400 my-8 uppercase">
//                     <Link onClick={Closemenu} to="/">
//                       Home
//                     </Link>
//                   </li>
//                   <li className="border-b border-gray-400 my-8 uppercase">
//                     <Link onClick={Closemenu} to="/product">
//                       Product
//                     </Link>
//                   </li>
//                   <li className="border-b border-gray-400 my-8 uppercase">
//                     <Link onClick={Closemenu} to="/contact">
//                       Contact
//                     </Link>
//                   </li>
//                   <li
//                     className={`${
//                       a.Login ? "" : "hidden"
//                     } border-b border-gray-400 my-8 uppercase`}
//                   >
//                     <Link onClick={Closemenu} to="/addnewproduct">
//                       Add New Product
//                     </Link>
//                   </li>
//                   <li
//                     className={`${
//                       a.Login ? "hidden" : ""
//                     } border-b border-gray-400 my-8 uppercase`}
//                   >
//                     <Link onClick={Closemenu} to="/login">
//                       Log in
//                     </Link>
//                   </li>
//                   <li
//                     className={`${
//                       a.Login ? "" : "hidden"
//                     } border-b border-gray-400 my-8 uppercase`}
//                   >
//                     <Link onClick={[Closemenu, logout]} to="/logout">
//                       Log Out
//                     </Link>
//                   </li>
//                   <li className="border-b border-gray-400 my-8 uppercase">
//                     <Link onClick={Closemenu} to="/about">
//                       About
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </section>
//             <ul className="hidden lg:flex space-x-6 text-blue-400 hover:cursor-pointer ">
//               <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-50 ...">
//                 <Link to="/">Home</Link>
//               </li>
//               <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-50 ...">
//                 <Link to="/product">Product</Link>
//               </li>
//               <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-50 ...">
//                 <Link to="/contact">Contact</Link>
//               </li>
//               <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-50 ...">
//                 <Link to="/about">About</Link>
//               </li>
//               <Link to="/cart">
//                 {" "}
//                 <Heroicon />{" "}
//               </Link>
//               <button
//                 className={`${
//                   a.isAdmin ? "" : "hidden"
//                 } bg-blue-400 rounded-md px-2 text-white -mt-1 hover:bg-blue-500`}
//               >
//                 <Link to={"/approveNewProducts"}>Approve Products</Link>
//               </button>

//               <button
//                 className={`${
//                   a.Login ? "" : "hidden"
//                 } bg-blue-400 rounded-md px-2 text-white -mt-1 hover:bg-blue-500`}
//               >
//                 <Link to={"/addnewproduct"}>Add New Product</Link>
//               </button>
//               <button
//                 className={`${
//                   a.Login ? "hidden" : ""
//                 } bg-blue-400 rounded-md w-20 h-8 -mt-1 hover:bg-blue-500`}
//               >
//                 <Link to="/login">
//                   <span className="text-white">Log in</span>
//                 </Link>
//               </button>
//               <button
//                 className={`${
//                   a.Login ? "" : "hidden"
//                 } bg-blue-400 rounded-md w-20 h-8 -mt-1 hover:bg-blue-500`}
//               >
//                 <Link onClick={[logout, Closemenu]} to="/logout">
//                   <span className="text-white">Log Out</span>
//                 </Link>
//               </button>
//             </ul>
//           </nav>
//         </div>

//         <style>{`
//       .hideMenuNav {
//         display: none;
//       }
//       .showMenuNav {
//         display: block;
//         position: absolute;
//         width: 100%;
//         height: 100vh;
//         top: 0;
//         left: 0;
//         background: white;
//         z-index: 10;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-evenly;
//         align-items: center;
//       }
//     `}</style>
//       </div> */}
//     </>
//   );
// }
