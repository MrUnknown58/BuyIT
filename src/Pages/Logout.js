import React from "react";
import { Link } from "react-router-dom";
// import { AppContext } from "../ContextAI/statescontext";

export default function Logout() {
  // const a = useContext(AppContext);
  return (
    <>
       <div className="text-center text-5xl mt-20 font-semibold">
      200: Logout Successful!!!
      
    </div>
      <div className='text-center -ml-20'>  
      <button className="bg-blue-400 rounded-md m-10 h-8 w-28 hover:bg-blue-500">
              <Link to="/">Go to Home</Link>
            </button>
      </div>
  {/* {(a[3])?'true':'false'} */}
    </>
  );
}
