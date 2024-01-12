import { Switch } from '@headlessui/react'
import React, { useState } from 'react'
import { BsArrow90DegDown, BsChevronContract, BsEnvelope, BsFillPinMapFill, BsFillTelephoneFill, BsGeo, BsGeoAltFill, BsMap, BsMapFill, BsMegaphone, BsMessenger, BsPhoneFill, BsPhoneLandscapeFill, BsPinMap, BsTelephoneFill } from 'react-icons/bs'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
function ContactUs() {
    const [agreed, setAgreed] = useState(false)
  return (
    <div>
    <div className='grid grid-cols-2 mt-3 mb-3 gap-2'>

   
    <div className='border-2 border-slate-400 p-3 mt-3 mb-3 rounded-xl'>
        <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.288479288929!2d78.488494574935!3d17.397938083490985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c46b49c357%3A0xf21259461c1e09aa!2sKeshav%20Memorial%20Educational%20Society!5e0!3m2!1sen!2sin!4v1704781293388!5m2!1sen!2sin" width="650" height="600" className=' 2'allowfullscreen  referrerpolicy="no-referrer-when-downgrade"></iframe></p>
    </div>

    <div className="isolate bg-white border-2 border-slate-400 p-3 mt-3 mb-3 rounded-xl">
     
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Enquiry Form</h2>
       
      </div>
      <form action="#" method="POST" className="mx-auto mt-3 max-w-xl ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
         
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                +91
                </label>
               
             
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
    </div>
    <div className='border-2'>
    <h1 className='text-3xl font-bold  border-slate-300 text-center w-full'>Contact Us</h1>

     <div className='flex flex-row'>
    <div className='basis-1/2 justify-center items-center flex flex-col'>
        <div className='flex flex-row justify-center items-center'>
     <BsGeoAltFill className='mr-3 text-red-500 text-2xl font-bold'/><span className='text-2xl font-bold text-red-500'>Find US</span>
       </div>
        <p className='font-bold text-lg'>Keshav Memorial Institute of Commerce and Sciences
</p>
        <p className='text-md'>Dayanand Marg, Hari Vihar Colony, Bhawani Nagar,<br/> Narayanguda, Hyderabad, Telangana 500029

</p>
    </div>
    <div className='basis-1/4 justify-center items-center flex flex-col'>
    <div className='flex flex-row justify-center items-center'>
    <BsTelephoneFill className='mr-3 text-red-500 text-2xl font-bold'/><h1 className='text-2xl font-bold text-red-500'>Call US</h1>
      </div>
        <p>+91 040 2322 4651 /<br/> Cell: 8331029974 (Office)

</p>
    </div>
    <div className='basis-1/4 justify-center items-center flex flex-col'>
    <div className='flex flex-row justify-center items-center'>
    <BsEnvelope className='mr-3 text-red-500 text-2xl font-bold'/><h1 className='text-2xl font-bold text-red-500'>Email US</h1>
      </div>
        <a href='#'  className='text-blue-400 hover:text-blue-600'>principal.kmics@gmail.com

</a>
    </div>
</div>
</div>

    </div>
  )
}

export default ContactUs