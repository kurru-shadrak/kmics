import React from 'react'
import './Home.css'
import first from '../assets/staff.jpg'
import second from '../assets/auditorium.jpg'
import third from '../assets/pooja.jpg'
import fourth from '../assets/dropathi.jpg'
import fifth from '../assets/events.jpg'
import graduate from '../assets/cap.png';
import star from '../assets/start.png';
import bank from '../assets/bank.jpeg'
import people from '../assets/peoples.png';
import enrolled from '../assets/enrolled.png';
import { Carousel } from 'flowbite-react';
import { Slide } from 'react-slideshow-image';
import milstone from '../assets/milestone.jpg'
import { Testimony } from '../testimony/testimony'
export const Home = () => {
  return (
    <div className='mt-2'>
      <div  className="h-[650px] z-999 ">
    <Carousel>
        <img src={first} alt="..." />
        <img src={second} alt="..." />
        <img src={third} alt="..." />
        <img src={fourth} alt="..." />
        <img src={fifth} alt="..." />
      </Carousel>
  </div>
     <div className="w-full grid grid-cols-5 z-998 -mt-24 relative gap-3 p-3" >
  
  <div className=" cursor-pointer hover:animate-bounce basis-1/5  shadow-md shadow-orange-500 border-4 rounded-lg flex flex-col items-center justify-center bg-white">
    <img src={graduate} width='100' height='70'/>
    <h3>20000+</h3>
    <p style={{fontWeight:600}}>+ Students Graduated</p>
    </div>  

  <div className="basis-1/5 shadow-md shadow-blue-400 border-4 rounded-lg flex flex-col items-center justify-center  bg-white">
    <img src={star} width='100' height='70'/><br/>
    <h3>27+</h3>
    <p style={{fontWeight:600}}>+ Years of Excellence </p>
      </div> 

      <div className="basis-1/5 shadow-md shadow-green-400 border-4 rounded-lg flex flex-col items-center justify-center  bg-white">
      <img src={bank} width='100' height='70'/>
      <h3>33,000</h3>
      <p style={{fontWeight:600}}>Sq. Yd. Campus</p>
      </div>

      <div className="basis-1/5 shadow-yellow-400 shadow-md border-4 rounded-lg flex flex-col items-center justify-center  bg-white">
      <img src={people} width='100' height='70'/>
      <h3>100%</h3>
      <p style={{fontWeight:600}}>% Placement Assistance </p>
     </div>

        <div className=" basis-1/5 shadow-md shadow-slate-500 border-4 rounded-lg flex flex-col items-center justify-center  bg-white">
        <img src={enrolled} width='100' height='70'/><br/>
        <h3>100%</h3>
         <p style={{fontWeight:600}}>% Students Passed</p>
          </div>
        
        </div>
        
   
{/* <Testimony/> */}

<div className="slider-container">
      
<div className='w-full p-5 border-2 border-slate-400 rounded-xl'>
  <h1 className='text-3xl text-red-500 text-center mt-3 mb-5 font-bold font-serif '>WHY KMICS</h1>
          <img src={milstone} alt="" className='bg-black rounded-lg'/>
        </div>
      <Slide>
  <div className="  w-full h-96 flex justify-center items-center  " >
  {/* <img src='https://th.bing.com/th/id/OIP.nR_Q9vMvwSNzc1987ig0kgAAAA?pid=ImgDet&rs=1' width='200'height='100' style={{textAlign:"left"}}/> */}
    <div className="first-tesimony   flex flex-col items-center justify-center  bg-[#0054a6] rounded-lg p-5  ">
      <h2 className='text-yellow-400 font-bold text-2xl font-serif'>Testimony</h2>
      <p className='text-lg text-white'> "
    One of the best managed educational institution. I had fond memories of this institution. 
   Education with values, Culture and heritage is the specialty of this institution. Keep it up."
  
  
  </p>
      <img src='http://www.kmics.ac.in/i/test-1.jpg' className='rounded-full'/>
      
   
  <p><b className='font-bold text-xl text-red-500'>Sri M. Venkaiah Naidu</b>
  
  </p>
  <p className='font-semibold text-lg text-white'>Hon'ble Vice President of India</p>
    </div>
  </div>
  
  
  <div className="h-96 flex justify-center items-center w-full     " >
    <div className=" flex flex-col items-center justify-center p-5  bg-[#0054a6] rounded-lg ">
    
    <h2 className='text-yellow-400 font-serif font-bold text-2xl'>Testimony</h2>
    <p className='text-lg text-white'> "
   I am very much impressed with the institution specially the dedication of teachers and the good activities ging on. I wish this institution a great success in shaping the lives and aspirations of students.
  
  One of the best managed educational institution. I had fond memories of this institution. 
   Education with values, Culture and heritage is the specialty of this institution. Keep it up."
  
  
  </p>
      <img src='http://www.kmics.ac.in/i/test-2.jpg' className='rounded-full'/>
      
   
  <p><b className='text-red-500 text-xl font-bold'>Prof. V. Gopal Reddy</b>
  
  </p>
  <p className='font-semibold text-white text-lg'>
  Former VC, Kakatiya & Palamuru University
  </p>
    </div>
  </div>
  
  
  <div className="w-full h-96 flex justify-center items-center " >
    <div className=" flex flex-col items-center justify-center rounded-lg p-5  bg-[#0054a6] ">
    <h2 className='text-yellow-400 font-serif font-bold tect-2xl'>Testimony</h2>
    <p className='text-xl text-white'>'' Congratulations to the Management, Faculty and students for taking up
    the conference. Such forums are needed to exchange the opinions of experts. All the best for your future endeavours. ''
  </p>
      <img src='http://www.kmics.ac.in/i/test-4.jpg' className='rounded-full'/>
      
   
  <p><b className='text-xl font-bold text-red-500'>Prof. V. Usha Kiran</b>
  
  </p>
  <p className='font-semibold text-lg text-white'>
  Dept. of Commerce, Osmania University
  </p>
    </div>
  </div>
  
  
  <div className=" h-96 flex justify-center items-center w-full   ">
    <div className=" flex flex-col items-center justify-center rounded-lg p-5  bg-[#0054a6] ">
    <h2 className='text-yellow-400 font-bold font-serif text-2xl'>Testimony</h2>
     
   <p className='text-lg text-white'> "The college is running on great ideals of spreading knowledge to the student community. The students are disciplined and attentive. Keep the good work going. Keep it up
  "</p>
      <img src='http://www.kmics.ac.in/i/test-6.jpg'className='rounded-full'/>
     
  <p><b className='font-bold text-xl text-red-500'>Prof. K. Satyanarayana</b>
  
  </p>
  <p className='text-lg font-semibold text-white'>
  Retd. Professor Dept. of Mathematics, Osmania University
  Currently Associated with CVR Engineering College
  </p>
    </div>
  </div>
  
  
  <div className="h-96 flex justify-center items-center w-full " >
    <div className=" flex flex-col items-center justify-center rounded-lg p-5  bg-[#0054a6] ">
    <h2 className='text-yellow-400 font-serif font-bold text-2xl'>Testimony</h2>
    <p className='text-white text-lg'> "An Institution committed for the cause of providing Quality Education to all sections of the society without profit motive.
  "</p>
      <img src='http://www.kmics.ac.in/i/test-7.jpg' className='rounded-full'/>
      
   
  <p><b className='font-bold text-red-500 text-xl'>G. Srinivas</b>
  
  </p>
  <p className='font-semibold text-white text-lg'>
  
  Joint secretary, UGC (SERO),
  Hyderabad
  </p>
    </div>
  </div>
  
  
  <div className="h-96 flex justify-center items-center w-full    " >
    <div className=" flex flex-col items-center justify-center rounded-lg p-5  bg-[#0054a6] ">
    <h2 className='text-yellow-400 font-serif text-2xl font-bold'>Testimony</h2>
    <p className='text-white text-lg'> "Congratulations to KMES for conducting a conference on ever relevant topics such as finance, marketing and taxation which are direct bearing on the livelihood of common man.

  "
  </p>
      <img src='http://www.kmics.ac.in/i/test-5.jpg' className='rounded-full'/>
      
   
  <p><b className='text-xl text-red-500 font-bold'>Prof. Ch. Gopal Reddy</b>
  
  </p>
  <p className='text-lg text-white font-semibold'>
  Former Registrar, Osmania University</p>
    </div>
  </div>
  
  
  <div className="h-96 flex justify-center items-center w-full ">
    <div className="flex flex-col items-center justify-center p-5 rounded-lg  bg-[#0054a6] ">
    <h2 className='text-yellow-400 font-serif font-bold text-2xl '>Testimony</h2>
    <p className='text-white text-lg '> "College is wonderfully doing very inspiring job. I wish a Great Success.''
  
  </p>
      <img src='http://www.kmics.ac.in/i/test-8.jpg' className='rounded-full'/>
      
   
  <p><b className='text-red-500 text-xl font-bold'>Prof. R. Limbadri</b>
  
  </p>
  <p className='text-white font-semibold text-lg'>
  Vice Chairman, TSCHE
  </p>
    </div>
  </div>
  
  
  <div className=" h-96 flex justify-center items-center w-full   " >
    <div className=" flex flex-col items-center justify-center p-5 rounded-lg  bg-[#0054a6] ">
    <h2 className='text-yellow-400 font-bold text-2xl font-serif'>Testimony</h2>
    <p className='text-white text-lg'> "A place to learn, grow and to become a best citizen of this great Nation.
  "
  </p>
      <img src='http://www.kmics.ac.in/i/test-9.jpg' className='rounded-full'/>
      
   
  <p><b className=' text-red-500 font-bold text-xl'>K.Rajender Rao</b>
  
  </p>
  <p className='text-white text-lg font-serif'>
  Scientist, NIN, Hyderabad
  </p>
    </div>
  </div>
  
{/*   
  <div className="bg-blue-700 h-96 w-full border-4  rounded-lg p-5  " >
    <div className=" flex flex-col items-center justify-center p-3  bg-[#0054a6] ">
    <h2 className='text-yellow-400'>Testimony</h2>
      <img src='http://www.kmics.ac.in/i/test-14.jpg' style={{borderRadius:"50%"}}/>
      
   <p style={{color:"white",fontSize:24,fontWeight:400}}> "College has got great ambience and good Infrastructure. Wonderful faculty and Amazing Hospitality.
  
  "
  </p>
  <p><b style={{color:"red",fontSize:34,fontWeight:800}}>Mr. Ganesh Nagu D</b>
  
  </p>
  <p style={{color:"black",fontSize:24,fontWeight:600,marginTop:-20}}>
  
  Founder and CEO
  BrainOVision Solutions Pvt. Ltd.
  </p>
    </div>
  </div>
  
   */}
{/*   
  <div className="bg-blue-700 h-96 w-full border-4   rounded-lg p-5  " >
    <div className=" flex flex-col items-center justify-center p-3  bg-[#0054a6] ">
    <h2 className='text-yellow-400'>Testimony</h2>
      <img src='http://www.kmics.ac.in/i/test-12.jpg' style={{borderRadius:"50%"}}/>
      
   <p style={{color:"white",fontSize:24,fontWeight:400}}> "The college always enthusiastic to organize the academic programs and encourages the students to take part in various activities.
  
  "
  </p>
  <p><b style={{color:"red",fontSize:34,fontWeight:800}}>Prof. Prashanta Athma</b>
  
  </p>
  <p style={{color:"black",fontSize:24,fontWeight:600,marginTop:-20}}>
  Head, Dept. of Commerce
  Osmania University
  </p>
    </div>
  </div>
  
   */}
  
  {/* <div className="bg-blue-700 h-96 w-full border-4   rounded-lg p-5  ">
    <div className=" flex flex-col items-center justify-center p-3  bg-[#0054a6] ">
    <h2 className='text-yellow-400'>Testimony</h2>
      <img src='http://www.kmics.ac.in/i/test-10.jpg' style={{borderRadius:"50%"}}/>
      
   <p style={{color:"white",fontSize:24,fontWeight:400}}> "Excellent Organization and very good academic environment in the college. All the very best.
  
  "
  </p>
  <p><b style={{color:"red",fontSize:34,fontWeight:800}}>Prof. D. Ashok</b>
  
  </p>
  <p style={{color:"black",fontSize:24,fontWeight:600,marginTop:-20}}>
  Dept of chemistry, Osmania University
  </p>
    </div>
  </div>
   */}
  
{/*   
  <div className="bg-blue-700 h-96 w-full border-4   rounded-lg p-5   " >
    <div className="flex flex-col items-center justify-center p-3  bg-[#0054a6] ">
    <h2 className='text-yellow-400'>Testimony</h2>
      <img src='http://www.kmics.ac.in/i/test-13.jpg' style={{borderRadius:"50%"}}/>
      
   <p style={{color:"white",fontSize:24,fontWeight:400}}> "Felt very Welcome Excellent Atmosphere, Vibrancy around, was deeply touched by the teachers and students alike.
  "
  </p>
  <p><b style={{color:"red",fontSize:34,fontWeight:800}}>Dr. Pratyay Basak</b>
  
  </p>
  <p style={{color:"black",fontSize:24,fontWeight:600,marginTop:-20}}>
  
  
  Dept. of Polymers & Functional Materials CSIR
  Hyderabad
  </p>
    </div>
  </div>
   */}
  
  
  {/* <div className="bg-blue-700 h-96 w-full border-4  rounded-lg p-5   " >
    <div className=" flex flex-col items-center justify-center p-3  bg-[#0054a6] ">
    <h2 className='text-yellow-400'>Testimony</h2>
      <img src='http://www.kmics.ac.in/i/test-3.jpg' style={{borderRadius:"50%"}}/>
      
   <p style={{color:"white",fontSize:24,fontWeight:400}}> "Keep the good work going.
  
  "
  </p>
  <p><b style={{color:"red",fontSize:34,fontWeight:800}}>Dr.S. Ramachandram</b>
  
  </p>
  <p style={{color:"black",fontSize:24,fontWeight:600,marginTop:-20}}>
  Former VC, Osmania University
  </p>
    </div>
  </div>
  
  
  <div className="bg-blue-700 h-96 w-full border-4   rounded-lg p-5  " >
    <div className=" flex flex-col items-center justify-center p-3  ">
    <h2 className='text-yellow-400'>Testimony</h2>
      <img src='http://www.kmics.ac.in/i/test-11.jpg' style={{borderRadius:"50%"}}/>
      
   <p style={{color:"white",fontSize:24,fontWeight:400}}> "This college is striving hard since its inception to cater to the need of the students and focusses on innovative activities.
  
  "
  </p>
  <p><b style={{color:"red",fontSize:34,fontWeight:800}}>Prof Shivaraj</b>
  
  </p>
  <p style={{color:"black",fontSize:24,fontWeight:600,marginTop:-20}}>Dean, Devt and UGC affairs
  Osmania University.
  </p>
    </div>
  </div> */}
  </Slide>
  
  </div>
    </div>
  )
}
