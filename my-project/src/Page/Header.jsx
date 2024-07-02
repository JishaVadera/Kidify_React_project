import React from "react";
import { FiPhone } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShop } from "react-icons/ci";

const Header = () => {
    return (
        <div>
            <div className='flex justify-between bg-purple-400 container   h-16 text-center items-center flex-wrap'>
                <FiPhone className='border rounded-full size-8 bg-yellow-600 px-2 py-1.5 ' />
                <span className='text-white -ml-72'>+01 456 789</span>
                <p className='text-white'>Flat 20% OFF Kikido X Ayla Collection without minimum purchase</p>
                <div className='text-white'>
                    <span className='mr-7'>About us</span>
                    <span className='mr-7'>Contact us</span>
                    <span className='mr-4'>Open Shop</span>
                </div>
            </div>
            <div>
                <div className="mt-2 flex justify-between items-center flex-wrap">
                    <div className="flex items-center max-w-fit px-3 py-2 bg-white rounded-2xl justify-between">
                        <input type="search" name="" id="" className=' border-2 border-gray-200 bg-transparent p-2 mt-2  w-[300px] rounded-md text-gray-500 placeholder:text-gray-400 placeholder-slate-400  font-medium sm:text-sm sm:leading-6' placeholder='Search' />
                        <CiSearch className='absolute   h-8 w-8 bg-white border-1 border-white rounded-full text-lg mt-2  line-clamp-5 ml-[17%]' />
                    </div>
                    <div>
                        <img src="./src/assets/logo.svg" alt="" srcset="" />
                    </div>
                    <div className="flex justify-end flex-wrap mr-10  items-center">
                        <span className=" size-10 ">
                            <CiSearch className="size-5" />
                        </span>
                        <span className=" size-10">
                            <CiUser className="size-5" />
                        </span>
                        <span className=" size-10">
                            <CiHeart className="size-5" />
                        </span>
                        <span className="size-10">
                            <CiShop className="size-5" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
