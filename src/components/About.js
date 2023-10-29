import React from 'react'

export default function About() {
  return (
    <section name="about" className='w-full h-screen'>
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>About this company</h2>
          <p className='py-6 text-3xl text-gray-500'>Year Of Establishment : 2023</p>
        </div>
        <p className='mt-20 text-xl'>
          Hi, I'm this company CEO jimin kim. I really want you to enjoy our platform.
          The idea about the chatty from my head. Can you believe it? I am genious
          You Know, LITERALLY I AM GENIUS!
          So, this app is genius too.
        </p>
        <br/>
        <p className='text-xl'>
          It has 4 function And I'll explain about it.<br/>
          1. Of course, chatting<br/>
          2. Main Page that you can see<br/>
          3. My Page is obvious,too<br/>
          4. Lotto Page. It helps you can get random numbers.<br/>
          How amazing the function is!
        </p>
      </div>
    </section>
  )
}
