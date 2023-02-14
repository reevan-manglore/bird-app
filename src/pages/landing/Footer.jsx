import React from 'react'
import footerLinks from '../../data/footerLinks'

function Footer() {
  return (
   <footer className='bg-background  px-4 py-3 w-full '>
      <ul className='flex space-x-5 flex-wrap justify-center'>
        {
         footerLinks.map(item=>{
            return (
              <a href='#' key={item} className='text-secondaryText hover:underline' >{item}</a>
            );
           }
         )
        }
      </ul>
   </footer>
  )
}

export default Footer