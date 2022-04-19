import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Down from '../../assets/down.png'
const Links = [
    'home',
    'scrims',
    'recruitment tools',
    'my team',
    'overwatch data',

]
const Sidebar = () => {
    const [showDown, setshowDown] = useState<Boolean>(true)
    return (
        <div className='absolute top-36 bottom-0 lg:hidden left-0 right-0 z-50 bg-[#2F2F2F]'>
            <div className=''>
                {/* logo cont */}
                <div className='bg-[#7635EF] flex items-center justify-center p-4 space-x-3'>
                    <img
                        src={Logo}
                    />
                    <h1 className='uppercase text-white font-bold'>champria</h1>
                </div>
                {/* logo cont */}
                {/* lists */}
                <div className=' p-3 space-y-6'>
                    {
                        Links.map((val, index) => (
                            <h1 className='cursor-pointer text-white capitalize text-center  font-semibold' key={index}>{val}</h1>
                        ))
                    }
                    <div onClick={() => setshowDown(!showDown)} className='cursor-pointer flex items-center justify-center space-x-2'><h1 className='text-white capitalize text-center  font-semibold'>Events</h1> <img src={Down} /></div>
                    {
                        showDown &&
                        <div className='!mt-2 !ml-2 space-y-2'>
                            {
                                ['Champria Chillin', 'champria challenge', 'SoS Spring 2022'].map((val, index) => (
                                    <h1 className='text-white capitalize text-center  font-semibold cursor-pointer' key={index}>{val}</h1>
                                ))
                            }
                        </div>
                    }
                    <h1 className='cursor-pointer text-white capitalize text-center  font-semibold'>About</h1>
                    <h1 className='cursor-pointer text-white capitalize text-center  font-semibold'>Blog</h1>
                    <h1 className='cursor-pointer text-white capitalize text-center  font-semibold'>Contact Us</h1>
                </div>
                {/* lists */}
            </div>
        </div>
    )
}

export default Sidebar