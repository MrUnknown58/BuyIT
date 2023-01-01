import React from 'react'
import {Link} from 'react-router-dom';

export default function Error404() {
  return (
    <>
    <div className="text-center text-5xl ml-8 mt-20 font-semibold">
      404 Error!!!
      
    </div>
    <div className='text-3xl text-center m-2'>
    Uh Oh! Looks like you are lost in your Quest... 
    </div>
    <div className='text-center text-xl mt-2'>
        continue to our homepage to continue your shopping...
      </div>
      <div className='text-center -ml-20'>  
      <button className="ml-28 bg-blue-400 rounded-md text-white m-10 h-8 w-28 hover:bg-blue-500">
              <Link to="/">Go to Home</Link>
            </button>
      </div>

    </>
  )
}
