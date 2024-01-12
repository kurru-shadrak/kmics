import React from 'react'


function Achievement() {
  return (
    <div className='border-4 border-slate-400 rounded-xl mt-3 mb-3 bg-white'>
     
      <h2 className='font-bold font-serif text-red-500 text-2xl border border-slate-300 shadow-xl text-center mt-3'> Achievements</h2>
       
      <div className='grid grid-cols-2 p-20'> 
      <div>
        <h4 className='font-bold text-l text-center'>
        Achievements - UG
        </h4>
        <a href='http://www.kmics.ac.in/i/Department%20of%20Chemistry%20Achievements.pdf' className='flex justify-center items center text-blue-500 hover:text-red-500'>Department of Chemistry Achievements</a>
       </div>
       <div> <h4 className='font-bold text-lg text-center'>
        Achievements - PG
        </h4>
        <a href='http://www.kmics.ac.in/i/Analytical_Chemistry_Achievements.pdf' className='flex justify-center items center text-blue-500 hover:text-red-500' >Analytical Chemistry Achievements</a>
        </div>
        </div>
    </div>
  )
}

export default Achievement