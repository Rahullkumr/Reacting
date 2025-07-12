import React from 'react'

const SFMainContent = () => {
  return (
    <div className='w-[80%] h-1/2 text-center flex flex-col items-center gap-10 text-white'>
      <div className='py-2 px-3 bg-gray-800/25 rounded-full'>
        ✨ Turn your vision into action effortlessly
      </div>
      <div className='text-6xl font-semibold'>
        <p>Build the Perfect Strategy Deck.</p>
        <p>In Minutes, Not Days.</p>
      </div>
      <div>
        <p>AI-generated decks tailored to captivate teams, partners, and investors.</p>
        <p>Just describe your idea, and let <strong>SlideFlow</strong> handle the heavy lifting.</p>
      </div>
      <div className='border flex justify-between rounded-full p-4 w-1/2 bg-white'>
        <input className='text-gray-800' type="text" placeholder="Enter your email..."/>
        <div className='text-white bg-gray-800 rounded-full py-2 px-6'>Get Early Access</div>
      </div>
    </div>
  )
}

export default SFMainContent
