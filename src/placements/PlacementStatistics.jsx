import React from 'react'


function PlacementStatistics() {

  return (
  <div className="border-4 border-slate-400 rounded-xl mt-3 mb-3 p-3">
    <h2 className='border border-slate-300 rounded-lg text-center font-serif font-bold text-2xl shadow-lg'>
    Placement Statistics
    </h2>
    <p className='flex justify-center items center font-bold text-red-500'><b>Please click on the links to see the details</b></p>
    <div className="statistics" >
   <span className='dot'></span> <a href="http://www.kmics.ac.in/i/2021-22%20COMPLETE%20REPORT.pdf"  className='flex justify-center items center text-blue-500 hover:text-red-500' >2021-2022</a><br/>
   <span className='dot'></span> <a href='http://www.kmics.ac.in/i/SELECTED%20STUDENTS%20LIST%202020-21.pdf' className='flex justify-center items center text-blue-500 hover:text-red-500' >2020-2021</a><br/>
   <span className='dot'></span> <a href='http://www.kmics.ac.in/i/SELECTED%20STUDENTS%20LIST%202019-20.pdf' className='flex justify-center items center text-blue-500 hover:text-red-500' >2019-2020</a><br/>
   <span className='dot'></span> <a href='http://www.kmics.ac.in/i/SELECTED%20STUDENTS%20LIST%202018-19.pdf'  className='flex justify-center items center text-blue-500 hover:text-red-500'>2018-2019</a><br/>
   <span className='dot'></span> <a href='http://www.kmics.ac.in/i/SELECTED%20STUDENTS%20LIST%202017-18.pdf' className='flex justify-center items center text-blue-500 hover:text-red-500' >2017-2018</a>
   </div>
 
  </div>
  )
}

export default PlacementStatistics