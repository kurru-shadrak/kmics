import React from 'react'


function Sports() {
  return (
    <div className='border-4 mt-3 mb-3 border-slate-400 rounded-xl p-3'>
<h2 className='font-bold font-serif text-xl text-center border border-slate-300 shadow-xl p-3 mt-3 rounded-xl'>
    Sports & Games
</h2>
<p>Osmania University as well as District Sports Association, Hyderabad District conducts
  inter collegiate tournaments for various events in which our college students participate. 
  Our Physical Director will coach the students in their respective fields of interest. Proper guidance will 
  be given to the students to participate in events held at National, International and local venues.</p>
  <p>Our Physical Directors will coach the students in their respective fields of interest. Proper guidance will be 
    given to the students to participate in events held at National, International and local venues.</p>
  <h4 className='text-2xl font-bold font-serif text-red-500 text-center'>Our Physical Directors</h4>
  <div className="card">
<div className="card-header"></div>
<div className="flex justify-center items-center ">
<table className='border-collapse border  border-slate-300 text-lg'>
          <thead>
              <tr>
                  <th className='border  border-slate-300 p-3 text-center'>S.NO</th>
                  <th className='border  border-slate-300 p-3 text-center'>Name of the Faculty</th>
                  <th className='border  border-slate-300 p-3 text-center'>Qualification</th>
                  <th className='border  border-slate-300 p-3 text-center'>	Experience</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className='border  border-slate-300 p-3 text-center'>1</td>
                  <td className='border  border-slate-300 p-3 text-center'>	Srinu	</td>
                  <td className='border  border-slate-300 p-3 text-center'>MA, MPEd</td>
                  <td className='border  border-slate-300 p-3 text-center'>5</td>
              </tr>
              <tr>
                  <td className='border  border-slate-300 p-3 text-center'>2</td>
                  <td className='border  border-slate-300 p-3 text-center'>Ragi Bai	</td>
                  <td className='border  border-slate-300 p-3 text-center'>MPEd</td>
                  <td className='border  border-slate-300 p-3 text-center'>4</td>
              </tr>
              </tbody>
              </table>
              </div>
              </div>
              <h2>Activities</h2>
<span className='dot'></span> <a href='http://www.kmics.ac.in/i/sport2018-19.pdf' style={{color:"red",fontSize:18,fontWeight:700}}>Sports & Games 2018-19</a>

    </div>
  )
}

export default Sports