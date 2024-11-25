import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () =>{
  return (
     <>
    <div className='bg-red-400  b-small h-screen w-screen flex justify-center items-center'>
        {/*form */}
        <div className=' rounded-md shadow-black/30 bg-emerald-300  h-98 space-y-3 pl-20 pt-4  w-[400px] flex flex-col jutify-center'>
           <form className = 'space-y-3' action=''>
               <div>
                 <p className='font-semibold text-2xl underline tracking-wide'>LOGIN</p>
               </div>

               <div className='mr-5'>
                 <p className='font-semibold text-zinc-700'>Email :</p>
                 <input className ='outline-none h-10 px-5 border-sm'type='text' placeholder='Email' required />
               </div>

               <div className='mr-5'>
                  <p className='font-semibold text-zinc-700'>Password :</p>
                  <input className='outline-none h-10 px-5 border-sm'type='Password' placeholder='Password' required/>
               </div>

               <div className='flex gap-5 mt-1'>
                 <input type='checkbox'/>
                 <p>Remember me ? </p>
               </div>
                
                <div className="mt-4"> 
                 <button className="bg-blue-600 text-white px-4 rounded-full hover:bg-blue-800 py-2 rounded">LOGIN</button> 
                 <p className="text-sm mt-2 underline text-blue-500 cursor-pointer">Forgot Password?</p>
                </div>

                 <p className='my-4 flex justify-center font-semibold'>OR</p>
                <div>
                  <p className='text-sm'>Need an Account? <span className="text-blue-600 underline text-bold" ><Link to = "/SignUp">SignUp</Link></span></p>
                </div>
           </form>
        </div>
    </div>
    
     </>
  )
}

export default SignIn;