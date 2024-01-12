import React from 'react'


function CollegeMagazines() {
  return (
    <div className='border-4 border-slate-400 rounded-xl mt-3 mb-3 bg-white '>
      <div className=''>
<h2 className='font-bold font-serif text-red-500 text-2xl border border-slate-300 shadow-xl text-center mt-3'>College Magazines</h2>
<div className="magazine-links" >
  {/* <iframe src='http://www.kmics.ac.in/i/Nivedika%20July%202021%20Issue%203%20Volume%209.pdf' width="500" height="700" title='Nivedika July 2021 Issue 3 Volume 9'></iframe><br/> */}
   <span className='dot'></span> <a href="http://www.kmics.ac.in/i/Nivedika%20July%202021%20Issue%203%20Volume%209.pdf" className='flex justify-center items center text-blue-500 hover:text-red-500' >Nivedika July 2021 Issue 3 Volume 9</a><br/>
   <span className='dot'></span> <a href='http://www.kmics.ac.in/i/Disha%20College%20News%20Magazine%202018-2019.pdf'className='flex justify-center items center text-blue-500 hover:text-red-500'  >Disha College News Magazine 2018-20191</a><br/>
   <span className='dot'></span> <a href='http://www.kmics.ac.in/i/Nivedika%202021%20Issue%201%20Volume%208.pdf'  className='flex justify-center items center text-blue-500 hover:text-red-500' >Nivedika 2021 Issue 1 Volume 8</a><br/>
   <span className='dot'></span> <a href='http://www.kmics.ac.in/i/Nivedika%202020%20Issue%20II%20Volume%206.pdf'  className='flex justify-center items center text-blue-500 hover:text-red-500' >Nivedika 2020 Issue II Volume 6</a><br/>

   </div>
   </div>
 
    </div>
  )
}

export default CollegeMagazines