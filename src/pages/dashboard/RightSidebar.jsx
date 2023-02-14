import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import TrendingHashtags from './Components/TrendingHashtags';
import FolowingRecomondationTile from './Components/FolowingRecomondationTile';

function RightSidebar() {
  return (
    <div className='w-[300px] py-6 px-2 bg-background h-screen overflow-y-scroll scroolbar-hidden'>
      <div className='px-4 py-2 rounded-full flex items-center  space-x-2 
                      border focus-within:border-none  border-slate-400 
                      ring-1 ring-transparent focus-within:ring-primary
                      group
                      '>
        <AiOutlineSearch className="text-xl text-slate-500 group-focus-within:text-primary" />
        <input
          type="text"
          placeholder='Search Bird App'
          className='bg-background text-white flex-grow 
                      border-none outline-none placeholder:text-slate-500
                      '
        />
      </div>


      <div className='p-2 bg-card rounded-md mt-4'>
        <p className='text-xl font-semibold text-white'>What's Happening</p>
        <TrendingHashtags
          introduction="Indian National News" 
          largeHedding="#Pulwama Attack" 
          trendingWith={["#CRPF", "#tribute"]} 
         />

        <TrendingHashtags
          introduction="Entertainment • Trending" 
          largeHedding="#HeraPheri3" 
          tweetCount = "2,352"
         />

        <TrendingHashtags
          introduction="Trending in India" 
          largeHedding="#Jawan" 
          trendingWith={["#Income Tax", "#Allu Arjun"]}
         />

        <TrendingHashtags
          introduction="Trending in India" 
          largeHedding="#SidKiaraReception" 
          tweetCount = "4,341"
         />

      </div>

      <div className='p-2 bg-card rounded-md mt-4'>
        <p className='text-xl font-semibold text-white'>Who To Follow</p>

        <FolowingRecomondationTile
         profileImg="https://api.dicebear.com/5.x/adventurer/svg?seed=Samantha Jones&scale=100"
         name="Samantha Jones"
         twitterHandle="samanthajones"
         />
       
        <FolowingRecomondationTile
         profileImg="https://api.dicebear.com/5.x/adventurer/svg?seed=Marcus Lee&scale=100"
         name="Marcus Lee"
         twitterHandle="marcusl33"
         />
       
        <FolowingRecomondationTile
         profileImg="https://api.dicebear.com/5.x/adventurer/svg?seed=Emily Watson&scale=100"
         name="Emily Watson"
         twitterHandle="emilywats0n"
         />

        <FolowingRecomondationTile
         profileImg="https://api.dicebear.com/5.x/adventurer/svg?seed=Ethan Chen&scale=100"
         name="Ethan Chen"
         twitterHandle="ethanchen8"
         />
       


      </div>
    </div>
  )
}

export default RightSidebar