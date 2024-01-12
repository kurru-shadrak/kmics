import React from 'react'


function FeeStructure() {
  return (
    <div className='border-4 border-slate-400 rounded-lg mt-3 bg-slate-200'>
        <h2 className='border border-slate-300 shadow-xl rounded-xl mt-2 text-2xl font-serif font-bold text-center'>Fee Stucture</h2>
        
        <div className="grid grid-cols-2 gap-4 ">
    
    <div className="card-header ">
<h4 className='text-center text-2xl font-bold font-serif text-red-500'>Under Graduate Courses</h4>

    <div className="text-xl p-3 flex justify-center items-center shadow-xl">
        <table className='border-4 border-collapse p-3'>
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>Course</th>
                    <th>I Year</th>
                    <th>II Year </th>
                    <th>III Year</th>
                  
                </tr>
            </thead>
            <tbody>
                <tr>
                   
                    <td>1</td>
                    <td>B.Com(General)</td>
                    <td>20605/-</td>
                    <td>20605/-</td>
                    <td>20605/-</td>
                    
                </tr>
                <tr>
                    <td>2</td>
                    <td>B.Com(Computer Apllication)</td>
                    <td>22605/-</td>
                    <td>22605/-</td>
                    <td>22605/-</td>
                    
                </tr>
                <tr>
                    <td>3</td>
                    <td>B.Com(Honors)</td>
                    <td>22605/-</td>
                    <td>22605/-</td>
                    <td>22605/-</td>
                    
                </tr>
                <tr>
                    <td>4</td>
                    <td>B.Com(Business Analytical)</td>
                    <td>36105/-</td>
                    <td>36105/-</td>
                    <td>36105/-</td>
                    
                    
                </tr>
                <tr>
                    <td>5</td>
                    <td>BBA</td>
                    <td>23920/-</td>
                    <td>23920/-</td>
                    <td>23920/-</td>
                 
                </tr>
                <tr>
                    <td>6</td>
                    <td>B.Sc(M.P.C)</td>
                    <td>22605/-</td>
                    <td>22605/-</td>
                    <td>22605/-</td>
                   
                </tr>
                <tr>
                    <td>7</td>
                    <td>B.Sc(M.P.Cs)</td>
                    <td>22605/-</td>
                    <td>22605/-</td>
                    <td>22605/-</td>
                   
                </tr>
                <tr>
                    <td>8</td>
                    <td>B.Sc(M.S.Cs)</td>
                    <td>22605/-</td>
                    <td>22605/-</td>
                    <td>22605/-</td>
                   
                </tr>
                <tr>
                    <td>9</td>
                    <td>B.Sc(Bt.Mb.C)</td>
                    <td>33605/-</td>
                    <td>33605/-</td>
                    <td>33605/-</td>
                   
                </tr>
            </tbody>

        </table>
    </div>
</div>


        <div className="card ">
   
<h4 className='font-bold font-serif text-2xl text-center text-red-500' >Post Graduate Course</h4>
    
    <div className="p-3 text-2xl items-center justify-center flex ">
        <table className='border-4 shadow-xl p-3 '>
            <thead >
                <tr >
                    <th>S.NO</th>
                    <th>Course</th>
                    <th>I  Year</th>
                    <th>II Year</th>
                  
                </tr>
            </thead>
            <tbody>
                <tr>
                   
                    <td>1</td>
                    <td>M.Sc(Mathematics)</td>
                    <td>13440/-</td>
                    <td>13440/-</td>
                    
                </tr>
                <tr>
                    <td>2</td>
                    <td>M.Sc(Statistics)</td>
                    <td>13340/-</td>
                    <td>13340/-</td>
                    
                </tr>
                <tr>
                    <td>3</td>
                    <td>M.Sc(Analytical Chemistry)</td>
                    <td>27755/-</td>
                    <td>27755/-</td>
                    
                </tr>
                <tr>
                    <td>4</td>
                    <td>M.Sc(Oranic Chemistry)</td>
                    <td>27755/-</td>
                    <td>27755/-</td>
                    
                    
                </tr>
                <tr>
                    <td>5</td>
                    <td>MBA</td>
                    <td>27755/-</td>
                    <td>27755/-</td>
                 
                </tr>
                <tr>
                    <td>6</td>
                    <td>M.Com</td>
                    <td>12780/-</td>
                    <td>12780/-</td>
                   
                </tr>
              
               
            </tbody>

        </table>
    </div>
</div>
</div>

    </div>
  )
}

export default FeeStructure