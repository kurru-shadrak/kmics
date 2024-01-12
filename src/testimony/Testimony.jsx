import { Carousel } from 'flowbite-react'
import React from 'react'
import { Slide } from 'react-slideshow-image'
const testimonies = [
    {
        id:"1",
     heading:"Testimony",
     imageUrl:"http://www.kmics.ac.in/i/test-1.jpg",
     voice:"One of the best managed educational institution. I had fond memories of this institution Education with values, Culture and heritage is the specialty of this institution. Keep it up.",
     Name:"Sri M. Venkaiah Naidu",
    digignation:"Hon'ble Vice President of India",
    },
    {
        id:"2",
        heading:"Testimony",
        imageUrl:"http://www.kmics.ac.in/i/test-2.jpg",
        voice:" I am very much impressed with the institution specially the dedication of teachers and the good activities ging on. I wish this institution a great success in shaping the lives and aspirations of students.One of the best managed educational institution. I had fond memories of this institution.Education with values, Culture and heritage is the specialty of this institution. Keep it up",
        Name:"Prof. V. Gopal Reddy",
       digignation:"Former VC, Kakatiya & Palamuru University",
       },
       
       {
        id:"3",
        heading:"Testimony",
        imageUrl:"http://www.kmics.ac.in/i/test-4.jpg",
        voice:" Congratulations to the Management, Faculty and students for taking upthe conference. Such forums are needed to exchange the opinions of experts. All the best for your future endeavours",
        Name:"Prof. V. Usha Kiran",
       digignation:"Dept. of Commerce, Osmania University",
       },
]
export const Testimony = () => {
  return (
    <div className=' bg-slate-700 text-white  '>
       {
        testimonies.map ((p,i)=>{
            return (
           
                <div className='border-4 p-3 flex items-center justify-center flex-col grid-cols-3' key={i}>
                    
                     <p className='font-bold text-2xl text-yellow-300 uppercase underline text-center font-sans rounded-xl '>{p.heading}</p>
                <p className='text-xl'>{p.voice}</p>
                  <p> <img src={p.imageUrl} with="200" height="200" alt="" className='rounded-full  '/></p>
              
                <p className='font-bold text-xl text-blue-400 '>{p.Name}</p>
                <p className='font-semibold text-red-400 text-lg'>{p.digignation}</p>
                </div>
              
               
            )
        })
       }
       
     </div>
  )
}
