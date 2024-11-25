import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col bg-violet-900  b-small h-screen w-screen flex justify-center items-center'>
        <h1 className='font-semibold text-4xl mb-20 underline tracking-wide animate-bounce'> WelCome to Our Platform : </h1>
    
       <div className=' outline-black-600 rounded-md  h-[150px] w-[400px] bg-violet-400'>    
         <div className='flex space-x-4'>
             <Link to ="/SignIn">
                 <button className='bg-blue-300 rounded hover:bg-blue-600 p-4 m-12  flex flex-col jutify-center'>
                    Sign-In
                 </button>
             </Link>
             
             <Link to ="/SignUp">
               <button className='bg-blue-300 rounded hover:bg-blue-600 p-4 m-12  flex flex-col jutify-center'>
                   Sign-Up
               </button>
             </Link>
         </div>

       </div>

        <p className='animate-ping  bg-violet-500 rounded  p-4 m-12  flex flex-col jutify-center'> THANKYOU !! </p>
    </div>

  )
}

export default Home;