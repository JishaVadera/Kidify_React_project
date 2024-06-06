import React from 'react'


const Login = () => {
    return (

        <section className='container m-auto'>
            <div className=" ">
                <svg className="absolute  h-8 w-8 bg-white border border-1 border-white rounded-full mt-3 text-center z-5 line-clamp-5 ml-[62%]" fill="#111111" stroke="#111111" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <img src="./src/assets/sign.jpg" className='bg-cover mb-20 m-auto mt-3' ></img>
            </div>
            <div className='mt-10'>     
                <a className='text-3xl hover:text-orange-400 font-serif p-6 ml-[33%]' >Login</a>           
                <a className='text-3xl  text-slate-500 hover:text-orange-400 font-serif' href='#'>Sign up</a>
                <input type="Email" placeholder="Email" className='block border-2 border-gray-200 bg-transparent p-3 mt-4 w-[480px] rounded-md text-gray-500 placeholder:text-gray-400 placeholder-slate-400 focus:ring-0 font-medium sm:text-sm sm:leading-6 m-auto' name="username" id="emai" autocomplete="username" value=""></input>
                <input type="Password" placeholder="Password" className='block border-2 border-gray-200 bg-transparent p-3 mt-4 w-[480px] rounded-md text-gray-500 placeholder:text-gray-400 placeholder-slate-400 focus:ring-0 font-medium sm:text-sm sm:leading-6 m-auto' name="username" id="password" autocomplete="username" value=""></input>
                <p className='text-orange-300 ml-[510px] mt-4'>Forgot your password?</p>
                <button className='bg-purple-400 mt-7 rounded-sm p-2 w-[480px] ml-[510px]'>Login</button>
                <p className="mt-10 text-center hover:text-orange-400"><a class="font-sm" href="#">Privacy &amp; Terms</a></p>
            </div>
        </section>
    )
}

export default Login