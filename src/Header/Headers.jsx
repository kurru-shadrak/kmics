import React from 'react'
import './Header.css'
import { DarkThemeToggle, Flowbite } from 'flowbite-react'
export const Headers = () => {
  return (
   <div className='-mt-8'>
     <div className='bg-red-500 h-10 text-right rounded-lg items-center flex justify-end p-2 '>
      
      <a href='http://www.kmics.ac.in/i/kmics-brochure.pdf'>
        <button className='mr-4 bg-blue-500 rounded-lg text-white hover:bg-blue-700 p-1 font-semibold text-md '>College brochure</button></a>
      <a href='https://dost.cgg.gov.in/'>
      <button className='bg-blue-500 rounded-lg text-white hover:bg-blue-700 p-1 font-semibold text-md '>Dost Site</button></a>
    
     </div>
    
    <div className="flex flex-row justify-center items-center mt-2 mb-2  ">
      
      <div className=' basis-1/6 justify-center items-center flex  '>
      <img src='http://www.kmics.ac.in/i/ou.png' height=''width='' className=' 0 rounded-full'/> 
    </div>
    <div className=' basis-4/6 justify-center items-center flex hover:animate-pulse	 delay-1000 cursor-pointer	'>
        <img src='https://th.bing.com/th/id/R.e21fb4a7927a5e142ccb315525a53fd7?rik=O0kOPINObxC6Xg&riu=http%3a%2f%2fkmics.ac.in%2fi%2flogo%2flogo.png&ehk=j%2fxTZvuBnQvXDXr0owl3tzVVXt1fztjhHv5d%2b1Z75as%3d&risl=&pid=ImgRaw&r=0' />
        </div>
        <div className=' basis-1/6 justify-center items-center flex md:animate-none'>
       
        <img src='http://www.kmics.ac.in/i/25.png' height=''width='' className='rounded-full '/> 
        </div> 
</div>
        </div>
 
   
  )
  
}
