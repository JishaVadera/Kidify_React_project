import React from 'react'
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgFacebook } from "react-icons/cg";
import { ImTwitter } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";


function Footer() {
  return (
    <footer className="pt-12 ">
      <div className="m-0 p-0">
        <div className="container ">
          <div className=" mb-7 flex text-nowrap justify-around " >
            <div className=" mb-7  visible shrink-0 " >
              <div className='p-0'>
                <h5 className=" text-uppercase mb-7 text-xl font-bold ">Contact</h5>
                <p className="  mb-2 text-lg">Monday to Friday 8 a.m - 5 p.m</p>
                <div className='pl-7 mb-1.5 -ml-3'>
                <IoCall className='text-neutral-500 inline -ml-3 text-lg' />
                <span className=" ml-3 text-lg">+01 456 789</span>
                </div>
                <div className='pl-7 mb-1.5 -ml-3 '>
                <IoCall className='text-neutral-500 inline -ml-3 text-lg ' />
                <span className=" ml-3 text-lg">+01 456 789</span>
                </div>
                <div className=''>
                <TfiEmail className='inline text-neutral-500 text-2xl ' />
                <span className='ml-3 text-lg'>contact@kidify.com</span>
                </div>
                
              </div>
            </div>
            <div className="visible basis-4 mb-7 shrink-0">
              <h5 className=" text-uppercase mb-7 font-bold text-xl ml-0">Company</h5>
              {/* Menu-company-container */}
              <div className="">
                <ul  className=" ml-0 ">
                  <li class="mb-3 text-base hover:underline ">
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">About Us</a>
                  </li>
                  <li className="mb-3 text-base hover:underline ">
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">Our Experts</a>
                  </li>
                  <li className='mb-3 text-base hover:underline '>
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">Services &amp; Price</a>
                  </li>
                  <li className="mb-3 text-base hover:underline">
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">Latest news</a>
                    </li>
                  <li  className="mb-3 text-base hover:underline ">
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">Support Center</a>
                    </li>
                </ul>
              </div>
            </div>
            <div  className="basis-4 mb-7 shrink-0 ">
              <h5 className=" text-uppercase mb-7 font-bold text-xl ml-3">Customers</h5>
              <div className="container">
                <ul  className=" ml-0">
                  <li  className="mb-3 text-base hover:underline">
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">Contact Us</a>
                  </li>
                  <li  className="mb-3 text-base hover:underline">
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">Payment &amp; Tax</a>
                  </li>
                  <li  className="mb-3 text-base hover:underline">
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">Bonus Point</a>
                  </li>
                  <li  className="mb-3 text-base hover:underline">
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">Supply Chain</a>
                  </li>
                  <li  className="mb-3 text-base hover:underline">
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">Student Discount</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="visible basis-4 mb-7 shrink-0 ">
              <h5 className="text-uppercase mb-7 font-bold text-xl ml-3">Support</h5>
              <div className="container">
                <ul className="menu ml-0">
                  <li class="mb-3 text-base hover:underline">
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">Shipping Info</a>
                  </li>
                  <li className="mb-3 text-base hover:underline">
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">Returns</a>
                  </li>
                  <li className="mb-3 text-base hover:underline">
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">Refund</a>
                  </li>
                  <li class="mb-3 text-base hover:underline">
                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />
                    <a href="#">How To Order</a>
                  </li>
                  <li className="mb-3 text-base hover:underline">

                  <MdKeyboardArrowRight className='text-neutral-500 text-xl inline' />                    <a href="#">How To Track</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="visible shrink-0 basis-4 mb-7 ">
              <h5 className=" text-uppercase mb-7 font-bold text-xl ml-3">Social</h5>
              <div className="container">
                <ul  className="menu">
                  <li  className="mb-3 text-base hover:underline">
                  <CgFacebook  className='text-neutral-500 text-xl inline' />
                    <a href="#" className='ml-2'>Facebook</a>
                  </li>
                  <li  className="mb-3 text-base hover:underline">
                  <ImTwitter className='text-neutral-500 text-xl inline' />
                    <a href="#" className='ml-2'>Twitter</a>
                  </li>
                  <li  className="mb-3 text-base hover:underline">
                  <AiOutlineInstagram className='text-neutral-500 text-xl inline' />
                    <a href="#" className='ml-2'>Instagram</a>
                  </li>
                  <li className="mb-3 text-base hover:underline">
                  <GrPinterest className='text-neutral-500 text-xl inline ' />
                    <a href="#" className='ml-2'>Pinterest</a>
                  </li>
                  <li  className="mb-3 text-base hover:underline">
                  <AiOutlineYoutube className='text-neutral-500 text-xl inline' />
                    <a href="#" className='ml-2'>Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer-2 */}
      <div className="relative">
        <div className="container">
          <div className="pt-6 pb-1 border-t-2 border-slate-200 justify-around">
            <div className="flex items-center">
              <div className=" text-center  visible mb-5">
                <a href="https://kidify.themebeer.com">
                  <img alt="kidify" src="./src/assets/logo.svg" />
                </a>
              </div>
              <div className=" text-center  -mb-5 w-[50%]  basis-0">
                <span className=" neutral-900 mr-1 ">
                  <p>©2024 <a href="#">Kidify</a>. All rights reserved</p>                        
              </span>
                  
              </div>
              <div className="col-lg-3 col-md-12X  text-lg-end mb-5 text-right ">
                <div className=" flex items-center justify-evenly  ">
                  <div className="flex justify-end">
                    <img src="./src/assets/mastercard.svg" alt="kidify" />
                    <img src="./src/assets/googlepay.svg" alt="kidify" />
                    <img src="./src/assets/payoneer.svg" alt="kidify" />
                    <img src="./src/assets/applepay.svg" alt="kidify" />
                    <img src="./src/assets/paypal.svg " alt="kidify" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer