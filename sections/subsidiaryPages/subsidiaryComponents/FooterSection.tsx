import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const FooterSection: React.FC  = () => {
  return (
  <div className='lg:h-[700px] z-50 relative h-[1000px] flex justify-center bg-inherit items-center '>

      <div className=' m-5 lg:w-full h-[95%] bg-white flex flex-col lg:flex-row rounded-2xl border' >
        <div className='w-full lg:w-[50%] flex flex-col items-center justify-center text-center'>

            <div className=" h-[80%] w-full flex flex-col  items-center justify-center ">
                <div className='rounded-lg bg-gray-400 lg:my-0 my-5 h-[50px] w-[200px] '> </div>
                <div className='mb-10 mt-5 text-base lg:text-lg lg:tracking-wider '>
                    <p>SHUTTLEWORTHSTRASSE 31-33,</p>
                    <p>1210 VIENNA, AUSTRIA</p>
                    <p>SALES@6B47.COM</p>
                </div>
                <div className='flex text-4xl w-[40%] lg:w-[20%] justify-around '>
                        <FaLinkedin />
                        <FcGoogle />
                </div>
            </div>

            <div className='flex lg:text-base text-sm flex-col lg:flex-row lg:h-[20%] h-[10%] opacity-80 py-10 px-3 lg:p-10 w-full text-center lg:items-end justify-center lg:justify-between '>
                <p>© 2023 6B47 REAL ESTATE INVESTORS AG</p>
                <div className='flex justify-center items-center'>
                    <p className='mr-3'>Imprint</p>
                    <p>Legal</p>
                </div>
            </div>

        </div>
        <div className='lg:w-[50%] border-t lg:border-0 flex-col justify-center flex lg:container '>
            <h2 className='lg:w-[70%] pt-3 lg:pt-0 text-base font-semibold lg:font-normal lg:text-xl px-6 text-left flex items-start justify-start mb-3 '>If you want to book an appointment or find solutions, fill out the form below and our manager will contact you within a day</h2>
            <form className='flex justify-center items-center  flex-col px-2 lg:p-4 w-full ' action="#">
                <input className='border-b  w-full mb-2 focus-within:border-black hover:border-black duration-150 outline-none p-3' placeholder='Name' type="text" />
                <input className='border-b w-full mb-2 focus-within:border-black hover:border-black duration-150  outline-none p-3' placeholder='Phone Number' type="text" />
                <input className='border-b  w-full mb-2 focus-within:border-black hover:border-black duration-150 outline-none p-3' placeholder='Selection' type="text" />
                <textarea className='border-b resize-none w-full focus-within:border-black h-[150px] lg:h-[250px] hover:border-black outline-none p-3' placeholder='Message' name="" id="" ></textarea>
                <div className="flex items-start justify-start w-full"><button className='text-left p-2 px-7 hover:bg-black hover:text-white duration-200 mt-2 lg:mt-5 outline-none border border-black rounded-full w-fit '>Send</button></div>
            </form>
        </div>
      </div>
  </div>
  )
}

export default FooterSection