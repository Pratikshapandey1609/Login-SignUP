import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
    <div className='bg-indigo-600  b-small h-screen w-screen flex justify-center items-center'>
        {/*form */}
        <div className=' rounded-md shadow-black/30 bg-purple-400  h-98 space-y-3 pl-20 pt-4  w-[400px] flex flex-col jutify-center'>
           <form className = 'space-y-3' action=''>
               <div>
                 <p className='font-semibold text-2xl underline tracking-wide'>SIGN-UP</p>
               </div>

               <div className='mr-5'>
                 <p className='font-semibold text-zinc-700'>Email :</p>
                 <input className ='outline-none h-10 px-5 border-sm'type='text' placeholder='Email' required />
               </div>

               <div className='mr-5'>
                  <p className='font-semibold text-zinc-700'>Password :</p>
                  <input className='outline-none h-10 px-5 border-sm'type='Password' placeholder='Password' required/>
               </div>
                
                <div className="mt-4"> 
                 <button className="bg-blue-600 text-white px-4 rounded-full hover:bg-blue-800 py-2 rounded">SignUp</button> 
                 <p className="text-sm mt-2 underline text-blue-500 cursor-pointer">Forgot Password?</p>
                </div>

                 <p className='my-4 flex justify-center font-semibold'>OR</p>
                <div>
                  <p className='text-sm'>Already Account Exists ? <span className="text-blue-600 underline text-bold" ><Link to = "/SignIn">SignIn</Link></span></p>
                </div>
           </form>
        </div>
    </div>
    
     </>
  )
}

export default SignUp;