import React from 'react'

export default function Feedback() {
  return (
    <section name="feedback" className='w-full my-24 text-white bg bg-slate-700'>
      <div className='max-w-6xl px-5 mx-auto text-center py-12'>
        <h2 className='text-4xl font-bold'>
          Feedback
        </h2>
        <p className='py-8 text-2xl text-white'>
        Lorem ipsum dolor sit amet consecteturr adispalsdidfu elit. EcvspoerjLorem ipsum dolor sit amet consecteturr adispalsdidfu elit. Ecvspoerj
        </p>
        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3'>
            <img src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc'
            className='w-16 -mt-14 rounded-full' alt='person'/>
            <h5 className='text-lg font-bold'>Lani Ko</h5>
            <p className='text-sm'>Lorem ipsum dolor sit amet consecteturr adispalsdidfu elit. EcvspoerjLorem ipsum dolor sit amet consecteturr adispalsdidfu elit. Ecvspoerj</p>
          </div>
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3'>
            <img src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc'
            className='w-16 -mt-14 rounded-full' alt='person'/>
            <h5 className='text-lg font-bold'>Lani Ko</h5>
            <p className='text-sm'>Lorem ipsum dolor sit amet consecteturr adispalsdidfu elit. EcvspoerjLorem ipsum dolor sit amet consecteturr adispalsdidfu elit. Ecvspoerj</p>
          </div>
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3'>
            <img src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc'
            className='w-16 -mt-14 rounded-full' alt='person'/>
            <h5 className='text-lg font-bold'>Lani Ko</h5>
            <p className='text-sm'>Lorem ipsum dolor sit amet consecteturr adispalsdidfu elit. EcvspoerjLorem ipsum dolor sit amet consecteturr adispalsdidfu elit. Ecvspoerj</p>
          </div>
        </div>
        <button className='px-6 py-3 my-3 duration-300 bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110'>
          Get Started
        </button>
      </div>
    </section>
  )
}
