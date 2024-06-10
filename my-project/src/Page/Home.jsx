import React from 'react'
import About from '../About_Page/About'
import { Link } from 'react-router-dom'
import { FiPhone } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div className='flex justify-between bg-purple-400 container   h-16 text-center items-center'>
        <FiPhone className='border rounded-full size-8 bg-yellow-600 px-2 py-1.5 ' />
        <span className='text-white -ml-72'>+01 456 789</span>
        <p className='text-white'>Flat 20% OFF Kikido X Ayla Collection without minimum purchase</p>
        <div className='text-white'>
          <span className='mr-7'>About us</span>
          <span className='mr-7'>Contact us</span>
          <span className='mr-4'>Open Shop</span>
        </div>
      </div>
      <div className='container flex justify-between'>
        <CiSearch className='absolute   h-8 w-8 bg-white border-1 border-white rounded-full text-lg mt-7 ml-60 line-clamp-5 ml-[70%]"'/>
        <input type="search" name="" id="" className=' border-2 border-gray-200 bg-transparent p-2 mt-4  w-[300px] rounded-md text-gray-500 placeholder:text-gray-400 placeholder-slate-400  font-medium sm:text-sm sm:leading-6' placeholder='search'  />
        <img src="./src/assets/logo.svg" alt="" srcset="" />
        <div className='flex justify-between'>
        <CiSearch/>
        <GoPerson />
        <CiHeart />
        <MdOutlineShoppingBag />
        </div>
      </div>
    </div>
  )
}

export default Home
