import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineGoogle, AiOutlineMail,AiOutlineTwitter } from "react-icons/ai";



import twitterLogo from "../../../assets/twitter_logo.png"

function AuthenticationOptions() {
    return (
        <div className='bg-background px-8 py-6 '>
           <AiOutlineTwitter className = "text-4xl text-white"/>
            <h1 className='text-6xl font-bold text-white my-5'>Happening Now</h1>
            <p className='text-4xl font-bold text-white '>Join Social Bird Today</p>

            <div className='my-4 w-fit '>
                <button className='bg-primary w-full px-8 py-2 flex justify-center items-center rounded-full  text-white active:scale-95'>
                    <AiOutlineGoogle className="text-lg mr-2 " />
                    <span className='font-bold'>Sign up with google</span>
                </button>

                <Link to= "/register" className='bg-white w-full px-8 py-2 flex justify-center items-center rounded-full mt-3  text-black active:scale-95'>
                    <AiOutlineMail className="text-lg mr-2 " />
                    <span className='font-bold'>Sign up with email</span>
                </Link>
                <p className='text-slate-600 max-w-xs ml-2.5 mt-3 text-xs'>
                    By signing up, you agree to the terms of
                    service and privacy policy, including cookie
                    use.
                </p>
            </div>


            <hr  className=' border-t-2 border-slate-700'/>

            <div className='w-fit'>
                <p className='text-lg text-white font-bold mt-3'>Already have an account</p>

                <Link to="/login" className='bg-gray-700 w-full inline-block text-center  px-8 py-2 text-sm  rounded-full mt-3  text-primary active:scale-95'>
                    <span className='font-bold'>Sign In</span>
                </Link>
            </div>



        </div>
    )
}

export default AuthenticationOptions