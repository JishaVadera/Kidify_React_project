import React from 'react'

function Feedinsta() {
    return (


        <div className="">
            <div className="relative top-0 pt-40 ">
                <div className="container">
                    <div className=" justify-center bg-slate-100 m-auto absolute top-2/3 left-0 right-0 z-1 w-72 text-center pt-1 pr-7 pb-1.5 pl-7 rounded-lg">
                        <p className="font-md-bold text-uppercase visible serif  font-bold ">Instagram feed</p>
                    </div>
                </div>
                <div className="mt-10 mb-14 flex overflow-hidden w-full max-md:flex-wrap">
                    <div className="-ml-28 -mr-36 flex items-center md:flex-wrap ">
                        <div className="visible  pl-1.5 pr-1.5 transition duration-700  ease-out hover:scale-[1.05] " >
                            <img src="./src/assets/f1.png" alt="kidify" className='object-cover  h-100 w-42' />
                        </div>
                        <div className="visible  pl-1.5 pr-1.5 transition duration-700  ease-out hover:scale-[1.05] " >
                            <img src="./src/assets/f2.png" alt="kidify" className='object-fill object-bottom h-100 w-42' />
                        </div>
                        <div className="visible   pl-1.5 pr-1.5 transition duration-700  ease-out hover:scale-[1.05] " >
                            <img src="./src/assets/f3.png" alt="kidify" className='object-fill h-100 w-42' />
                        </div>
                        <div className="visible  pl-1.5 pr-1.5 transition duration-700  ease-out hover:scale-[1.05] ">
                            <img src="./src/assets/f4.png" alt="kidify" className='object-fill h-100 w-42' />
                        </div>
                        <div className="visible   pl-1.5 pr-1.5 transition duration-700  ease-out hover:scale-[1.05]  " >
                            <img src="./src/assets/f5.png" alt="kidify" className='object-fill h-100 w-42' />
                        </div>
                        <div className="visible   pl-1.5 pr-1.5 transition duration-700  ease-out hover:scale-[1.05] " >
                            <img src="./src/assets/f6.png" alt="kidify" className='object-fill h-100 w-42' />
                        </div>
                        {/* <div className="  animated visible   pl-1.5 pr-1.5 transition duration-700  ease-out hover:scale-[1.05]">
                            <img src="./src/assets/f3.png" alt="kidify" className='object-fill h-100 w-42' />
                        </div> */}
                        {/* <div className=" md:none animated visible   pl-1.5 pr-1.5 transition duration-700  ease-out hover:scale-[1.05]">
                            <img src="./src/assets/f7.png" alt="kidify" className='object-fill h-100 w-42' />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedinsta