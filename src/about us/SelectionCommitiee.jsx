import React from 'react'


function SelectionCommitiee() {
  return (
    <div className='selection'>
    <div className="card">
    <div className="text-2xl text-center font-bold font-serif border border-slate-300 rounded-lg p-2 mt-2 flex justify-center items-center w-full">
<h2>Selection Committee</h2>
    </div>
    <div className="flex justify-center items-center w-full mt-3 mb-3">
        <table className='border-2 border-collapse border-slate-400 rounded-lg'>
            <thead>
                <tr>
                    <th className='border border-slate-400 p-3 text-red-500'>S.NO</th>
                    <th className='border border-slate-400 p-3 text-red-500'>Name</th>
                    <th className='border border-slate-400 p-3 text-red-500'>Disignation</th>
                  
                    
                  
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-slate-400 p-3 text-lg '>1</td>
                    <td className='border border-slate-400 p-3 text-lg '>Prof S SRINU NAIK-OSMANIA UNIVERSITY</td>
                    <td className='border border-slate-400 p-3 text-lg '>Selection Committee Member</td>
                 
                </tr>
              
            </tbody>

        </table>
    </div>
</div>

</div>
  )
}

export default SelectionCommitiee