import React from 'react'
import './Navbar.css'
import { Home } from '../Home/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Footers } from '../Footer/Footers'
import AdmissionProcess from '../courses fee details/AdmissionProcess'
import { Dropdown } from 'flowbite-react'
import College from '../courses fee details/College'
import PresidentMsg from '../about us/PresidentMsg'
import SecreteryMsg from '../about us/SecreteryMsg'
import Visions from '../courses fee details/Visions'
import Principal from '../about us/Principal'
import FeeStructure from '../courses fee details/FeeStructure'
import Achievement from '../Acadamics/Achievement'
import CollegeMagazines from '../Acadamics/CollegeMagazines'
import ExpertsTalk from '../Acadamics/ExpertsTalk'
import PlacementCell from '../placements/PlacementCell'
import PlacementReruires from '../placements/PlacementReruires'
import PlacementStatistics from '../placements/PlacementStatistics'
import PlacementOfficer from '../placements/PlacementOfficer'
import PlacementGallary from '../placements/PlacementGallary'
import Grievance from '../StudentsSupports/Grievance '
import AntiRagging from '../StudentsSupports/AntiRagging'
import Clubs from '../StudentsSupports/Clubs'
import Nss from '../StudentsSupports/Nss'
import Ncc from '../StudentsSupports/Ncc'
import Sas from '../StudentsSupports/Sas'
import WomenEmpowerment from '../StudentsSupports/WomenEmpowerment'
import Ict from '../facilities/Ict'
import Sports from '../facilities/Sports'
import Labrary from '../facilities/Labrary'
import { Headers } from '../Header/Headers'
import UgCommerce from '../ugdepartments/UgCommerce'
import PgOranicChemistry from '../Pgdepartments/PgOranicChemistry'
import PgStatistics from '../Pgdepartments/PgStatistics'
import PgMathematics from '../Pgdepartments/PgMathematics'
import PgCommerce from '../Pgdepartments/PgCommerce'
import UgTelugu from '../ugdepartments/UgTelugu'
import UgSanskrit from '../ugdepartments/UgSanskrit'
import UgMicrobiolozy from '../ugdepartments/UgMicrobiolozy'
import UgChemistry from '../ugdepartments/UgChemistry'
import UgHindi from '../ugdepartments/UgHindi'
import UgEnglish from '../ugdepartments/UgEnglish'
import UgStatistics from '../ugdepartments/UgStatistics'
import UgComputersScience from '../ugdepartments/UgComputersScience'
import UgMathematics from '../ugdepartments/UgMathematics'
import UgBioTechonolozy from '../ugdepartments/UgBioTechonolozy'
import Pgmba from '../Pgdepartments/Pgmba'
import PgAnalyticalChemistry from '../Pgdepartments/PgAnalyticalChemistry'
import UgPhysics from '../ugdepartments/UgPhysics'
import ManegingCommetiee from '../about us/ManegingCommetiee'
import GoverningCommetiee from '../about us/GoverningCommetiee'
import SelectionCommitiee from '../about us/SelectionCommitiee'
import ContactUs from '../StudentsSupports/ContactUs/ContactUs'

export const Navbars = () => {
  return (
   
 <div className="mb-2 " >
  <Headers/>
  {/* <Header/> */}
<BrowserRouter>
       
    
<ul className='p-1 m-0  bg-blue-500 overflow-hidden list-none w-full rounded-lg '>
<li className='float-left text-white hover:bg-blue-600 block text-center mt-1 p-2 px-2 font-semibold text-sm hover:rounded-xl hover:text-white ' >
  <Link to ='/' >
    Home
     </Link></li>
<li className='float-left text-white hover:bg-blue-600 block text-center font-bold text-md hover:rounded-xl mt-1 hover:text-white   ' >
<Dropdown color="none" pill label="About us" dismissOnClick={false} className='items-center justify-center flex  '>
      <Dropdown.Item dismissOnClick={true}><Link className="" to='/college'target="_blank">  The College         </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/president'target="_blank">President's Message </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/secretery'>Secretary's Message </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/principal'>Prinicipal's Message</Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/vision'>   Vision &amp; Mission</Link> </Dropdown.Item>
    </Dropdown>
</li>
<li className='float-left text-white hover:bg-blue-600 block text-center font-bold text-md hover:rounded-xl mt-1 hover:text-white   ' >
<Dropdown color="none" pill label="Administative" dismissOnClick={false} className='items-center justify-center flex  '>
  
      <Dropdown.Item><Link className="" to='/maneging'>Managing Committee (Society)</Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/governing'>College Governing Body     </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/selection'>Selection Committee        </Link> </Dropdown.Item>
    </Dropdown>
</li>
<li className='float-left text-white hover:bg-blue-600 block text-center mt-1 font-bold text-md hover:rounded-xl hover:text-white   ' >
<Dropdown color="nonee" pill label="Admission" dismissOnClick={false} className='items-center justify-center flex  '>
      <Dropdown.Item dismissOnClick={true}><Link className="" to='/feestucture'>Fee Structure     </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/addmission'>Admissions Procedure </Link></Dropdown.Item>
 
    </Dropdown>
</li>
<li className='float-left text-white hover:bg-blue-600 block text-center mt-1 font-bold text-md hover:rounded-xl hover:text-white   ' >
<Dropdown color="none" pill label="Acadamics" dismissOnClick={false} className='items-center justify-center flex  '>
      <Dropdown.Item dismissOnClick={true}><Link className="" to='https://www.osmania.ac.in/'>UG & PG Syllabus  </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='https://www.osmania.ac.in/'>Results </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='https://www.osmania.ac.in/'>OU Updates. </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to=''>Research & Publications</Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='http://www.kmics.ac.in/i/Hand-Book-2020-21.pdf'>Academic Calendar</Link> </Dropdown.Item>
      <Dropdown.Item><Link className="" to='https://www.osmania.ac.in'>Examinations</Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/achievement'>Achievements</Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to=''>Seminars & Conferencess</Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/magazines'>College Magazines</Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/expert'> Expert Talks</Link></Dropdown.Item>
    </Dropdown>
    </li>
<li className='float-left text-white hover:bg-blue-600 block text-center mt-1 font-bold text-md hover:rounded-xl hover:text-white   ' >
<Dropdown color="none" pill label="Departments" dismissOnClick={false} className='items-center justify-center flex text-md '>
      <Dropdown.Item dismissOnClick={true}> <Dropdown color="none" pill  label="UG(UNDER GRADUATE)" placement="right-start">
        <Dropdown.Item><Link to='/ugcomputers'>Computers</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/ugmathematics'>Mathematics</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/ugstatistics'>Statistics</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/ugchemistry'>Chemistry</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/ugphysics'>Physics</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/ugmicrobiology'>MicroBiology</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/ugbiotechnolozy'>Biotecnology</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/ugcommerse'>Commerse</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/ugtelugu'>Telugu</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/ughindi'>Hindi</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/ugenglish'>English</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/ugsanskrit'>Sanskrit</Link></Dropdown.Item>
        
      </Dropdown>
      </Dropdown.Item>
      <Dropdown.Item dismissOnClick={true}>
      <Dropdown color="none" pill  label="PG(POST GRADUATE)" placement="right-start">
        <Dropdown.Item><Link to='/pgmathematics'>Mathematics</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/pgstatistics'>Statistics</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/pgorganic'>Oranic Chemistry</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/pganalytic'>Analytic Chemistry</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/pgmcom'>M.com</Link></Dropdown.Item>
        <Dropdown.Item><Link to='/pgmba'>MBA </Link></Dropdown.Item>
      </Dropdown>
    
        </Dropdown.Item>
    
    </Dropdown></li>
<li className='float-left text-white  hover:bg-blue-600 block text-center mt-1 font-bold text-md hover:rounded-xl hover:text-white   '>
<Dropdown color="none" pill label="Placement" dismissOnClick={false} className='items-center justify-center flex '>
      <Dropdown.Item dismissOnClick={true}><Link className="" to='/cell'>The Placement Cell      </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/our'>Our Recruiter </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/statistics'>Placement Statistics </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/gallary'>Placement Gallary</Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/officer'>Placement officer</Link> </Dropdown.Item>
    </Dropdown>
  </li>
<li className='float-left text-white hover:bg-blue-600 block text-center mt-1 font-bold text-md hover:rounded-xl hover:text-white   '>
<Dropdown color="none" pill label="Student Support" dismissOnClick={false} className='items-center justify-center flex'>
      <Dropdown.Item dismissOnClick={true}><Link className="" to='/sas'>Support a Student (SAS)    </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/nss'>NSS </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/womenempowerment'>Women Empowerment </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='/clubs'>Clubs</Link></Dropdown.Item>
      <Dropdown.Item><Link className=""  to='/grievance'>Grievance &amp; Redressaler</Link> </Dropdown.Item>
      <Dropdown.Item><Link className="" to='/ncc'>NCC </Link></Dropdown.Item>
      <Dropdown.Item><Link className=""to='/antiragging'> Anti-Ragging Cell</Link></Dropdown.Item>
    </Dropdown>
  </li>
<li className='float-left text-white hover:bg-blue-600 block text-center mt-1 font-bold text-md hover:rounded-xl hover:text-white   '>
<Dropdown color="none" pill label="Facilities" dismissOnClick={false} className='items-center justify-center flex'>
      <Dropdown.Item dismissOnClick={true}><Link className=""to='/ict'>ICT Facilities      </Link></Dropdown.Item>
      <Dropdown.Item><Link className=""  to='http://www.kmics.ac.in/i/INFRASTRUCTURE.pdf'>Infrastructure </Link></Dropdown.Item>
      <Dropdown.Item><Link className=""to='/library'> Library</Link></Dropdown.Item>
      <Dropdown.Item><Link className=""  to='/sports'>Sports &amp; Games</Link></Dropdown.Item>
      
    </Dropdown></li>

    <li className='float-left text-white hover:bg-blue-600 block text-center mt-1 font-bold text-md hover:rounded-xl hover:text-white   ' >
<Dropdown color="none" pill label="IQAC" dismissOnClick={false} className='items-center justify-center flex  '>
      <Dropdown.Item dismissOnClick={true}><Link className="" to='https://view.officeapps.live.com/op/view.aspx?src=http%3A%2F%2Fwww.kmics.ac.in%2Fi%2FIQAC-REPORT-2021-22.docx&wdOrigin=BROWSELINK'>IQAC REPORT 2021-22 </Link></Dropdown.Item>
      <Dropdown.Item><Link className=""                       to='https://view.officeapps.live.com/op/view.aspx?src=http%3A%2F%2Fwww.kmics.ac.in%2Fi%2FIQAC-REPORT-2020-21.docx&wdOrigin=BROWSELINK'>IQAC REPORT 2020-21                       </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='http://www.kmics.ac.in/i/IQAC%20Activities%202018-2019.pdf'>IQAC REPORT 2019-20</Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='http://www.kmics.ac.in/i/IQAC%20Activities%202018-2019.pdf'>IQAC REPORT 2018-19 </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='http://www.kmics.ac.in/i/IQAC%20Activities%202017-2018.pdf'>IQAC REPORT 2017-18 </Link> </Dropdown.Item>
      <Dropdown.Item><Link className="" to='http://www.kmics.ac.in/i/IQAC%20Activities%202017-2018.pdf'>IQAC REPORT 2016-17  </Link></Dropdown.Item>
      <Dropdown.Item><Link className="" to='http://www.kmics.ac.in/i/IQAC%20Activities%202017-2018.pdf'>IQAC REPORT 2015-16  </Link></Dropdown.Item>
     </Dropdown>
    </li>

    <li className='float-left text-white hover:bg-blue-600 block text-center mt-1 font-bold text-md hover:rounded-xl hover:text-white   ' >
<Dropdown color="none" pill label="Others" dismissOnClick={false} className='items-center justify-center flex  '>
      <Dropdown.Item><Link className=""  to='http://www.kmics.ac.in/i/Provisional-Accrediation.pdf'>NAAC                                                                                                </Link></Dropdown.Item>
      <Dropdown.Item><Link className=""  to='http://www.kmics.ac.in/i/Degree-PG-NIRF%202022.pdf'>Degree & PG College                                                                                     </Link></Dropdown.Item>
      <Dropdown.Item><Link className=""  to=''> NIRF                                                                                                                                                     </Link> </Dropdown.Item>
      <Dropdown.Item><Link className=""  to='https://view.officeapps.live.com/op/view.aspx?src=http%3A%2F%2Fwww.kmics.ac.in%2Fi%2FLibraryLabEquipments.xlsx&wdOrigin=BROWSELINK'>Library & Lab Equipment  </Link></Dropdown.Item>
      <Dropdown.Item><Link className=""  to='https://view.officeapps.live.com/op/view.aspx?src=http%3A%2F%2Fwww.kmics.ac.in%2Fi%2FCapitalExpendutere.xlsx&wdOrigin=BROWSELINK'>Capital Expenditure        </Link></Dropdown.Item>
     </Dropdown>
     
    
    </li>
    <li className='float-left text-sm p-2 px-2 font-semibold text-white hover:bg-blue-600 block text-center mt-1  hover:rounded-xl hover:text-white   ' >
<Link to='/contact' clasName='text-sm'>Contact us</Link>
    </li>
    <li className='float-left text-black hover:bg-blue-600 block text-center mt-1 font-bold text-md hover:rounded-xl hover:text-white   ' >

    </li>
</ul>
   

<Routes>
  
<Route path='/' element={<Home/>}/>

<Route path='/addmission' element={<AdmissionProcess/>}/>
  
   <Route path='/college' element={<College/>}/>
  <Route path='/president' element={<PresidentMsg/>}/>
  <Route path='/secretery' element={<SecreteryMsg/>}/>
  <Route path='/vision' element={<Visions/>}/>
  <Route path='/principal' element={<Principal/>}/>
  <Route path='/feestucture' element={<FeeStructure/>}/>
  <Route path='/achievement' element={<Achievement/>}/>
  <Route path='/magazines' element={<CollegeMagazines/>}/>
  <Route path='/expert' element={<ExpertsTalk/>}/>
  
  <Route path='/cell' element={<PlacementCell/>}/>
  <Route path='/our' element={<PlacementReruires/>}/>
  <Route path='/statistics' element={<PlacementStatistics/>}/>
  <Route path='/officer' element={<PlacementOfficer/>}/>
  <Route path='/gallary' element={<PlacementGallary/>}/>
  
  <Route path='/grievance' element={<Grievance/>}/>
  <Route path='/antiragging' element={<AntiRagging/>}/>
  <Route path='/clubs' element={<Clubs/>}/>
  <Route path='/nss' element={<Nss/>}/>
  <Route path='/ncc' element={<Ncc/>}/>
  <Route path='/sas' element={<Sas/>}/>
  <Route path='/womenempowerment' element={<WomenEmpowerment/>}/>
  <Route path='/ict' element={<Ict/>}/>
  <Route path='/sports' element={<Sports/>}/>
  <Route path='/library' element={<Labrary/>}/>
  <Route path='/ugbiotechnolozy' element={<UgBioTechonolozy/>}/>
  <Route path='/ugcommerse' element={<UgCommerce/>}/>
 
  
  <Route path='/ugmathematics' element={<UgMathematics/>}/>
 <Route path='/ugcomputers' element={<UgComputersScience/>}/>
    <Route path='/ugphysics' element={<UgPhysics/>}/>
  <Route path='/ugstatistics' element={<UgStatistics/>}/>
  <Route path='/ugenglish' element={<UgEnglish/>}/>
  <Route path='/ughindi' element={<UgHindi/>}/>
  <Route path='/ugchemistry' element={<UgChemistry/>}/>
  <Route path='/ugmicrobiolozy' element={<UgMicrobiolozy/>}/>
  <Route path='/ugsanskrit' element={<UgSanskrit/>}/>
  <Route path='/ugtelugu' element={<UgTelugu/>}/>  
  <Route path='/pgmcom' element={<PgCommerce/>}/>
  <Route path='/pgmathematics' element={<PgMathematics/>}/>
  <Route path='/pgstatistics' element={<PgStatistics/>}/>
  <Route path='/pganalytic' element={<PgAnalyticalChemistry/>}/>
  <Route path='/pgorganic' element={<PgOranicChemistry/>}/>
  <Route path='/pgmba' element={<Pgmba/>}/>
  <Route path='/maneging' element={<ManegingCommetiee/>}/>
  <Route path='/governing' element={<GoverningCommetiee/>}/>
  <Route path='/selection' element={<SelectionCommitiee/>}/>
  <Route path='/contact' element={<ContactUs/>}/>
  {/*
  <Route path='/addmisionprocess' element={<AdmissionProcess/>}/>

 
  <Route path='/pg' element={<PgDepartments/>}/>
  <Route path='/ug' element={<UgDepartment/>}/>
 

  
  <Route path='/almuni' element={<Almuni/>}/>
  
  */}
</Routes> 
</BrowserRouter>
<Footers/>
    </div>
  )
}
