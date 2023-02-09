import {useContext} from 'react'
import {Navigate} from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'


import AuthenticationOptions from './AuthenticationOptions.jsx'
import Footer from './Footer'
import landingPageIllustartion from "../../../assets/landing_page_illustration.webp"

function index() {
  const {isLoggedIn}  = useContext(AuthContext);


  return (
    isLoggedIn? <Navigate to="/dashboard" replace={true}/>
    :
    <section className='h-screen max-h-screen flex flex-col'>
        <div className='flex-grow bg-green-200 grid grid-cols-2 '>
            
            <div 
                className='bg-background bg-cover bg-center  '
                style={{"backgroundImage":`url(${landingPageIllustartion})`}}
            > 
            </div>

            <AuthenticationOptions/>
          
        </div>
        <Footer/>
    </section>
  )
}

export default index