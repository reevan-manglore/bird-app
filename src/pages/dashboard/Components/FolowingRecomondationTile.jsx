import React from 'react'

function FolowingRecomondationTile({profileImg,name,twitterHandle}) {
  return (
    <div className='flex space-x-2  flex-none items-center my-3'>
        <img src={profileImg} alt="profile image" className=' rounded-full object-cover w-12 h-12' />
        <div className='flex flex-col items-start w-1/2 '>
              <p className='font-semibold  text-white text-ellipsis overflow-hidden whitespace-nowrap'>{name}</p>
              <p className='text-slate-500  text-sm text-ellipsis overflow-hidden'>@{twitterHandle}</p>
        </div>
        <button type='button' className='px-6 py-2 w-fit h-fit text-center text-sm bg-white rounded-3xl'> Follow</button>
    </div>
  )
}

export default FolowingRecomondationTile