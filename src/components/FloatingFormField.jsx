import React from 'react'

function FloatingFormField({type ="text",name,placeholder,value,onChange,validator,isValid = false,errorMessage}) {
  return (
    <div>
      <div className='
      flex flex-col px-2 py-4  w-[40vw]
      rounded-sm border border-gray-600 focus-within:border-none 
      ring-2 ring-transparent focus-within:ring-primary 
      floating-label-input  group
    '>
      <input type={type} name={name} id = {name} className='bg-transparent text-white outline-none' placeholder=' ' value={value} onChange = {(e)=>onChange(e.target.value)}/>
      <label htmlFor={name} className='text-white text-xs cursor-text group-focus-within:text-primary'>{placeholder}</label>
    </div>
    <p className={`text-sm text-red-500 ${isValid?"invisible":"visible"} `} aria-hidden = {isValid?"true":"false"}>{errorMessage}</p>
  </div>
  )
}

export default FloatingFormField