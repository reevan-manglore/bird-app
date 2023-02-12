import React from 'react'

function ActionTabs({Icon,title}) {
  return (
    <div className='flex  space-x-3 px-3 py-2 my-1 rounded-full hover:bg-slate-300/25 cursor-pointer'>
        <Icon className = "text-white text-3xl"/>
        <p className='text-white text-2xl '>{title}</p>
    </div>
  )
}

export default ActionTabs