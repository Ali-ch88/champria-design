import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Down from '../../assets/down.png'
import User from '../../assets/user.jpg'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillBellFill } from 'react-icons/bs'
import { BsChevronDown } from 'react-icons/bs'
import { AiOutlineUp } from 'react-icons/ai'
import ThumbElement from './ThumbElement'
import ViewElement from './ViewElement'
import { GiHamburgerMenu } from 'react-icons/gi'
import Sidebar from './Sidebar'
const Links = [
    'home',
    'scrims',
    'recruitment tools',
    'my team',
    'overwatch data',

]
const Dashboard: React.FC = () => {
    const [showDown, setshowDown] = useState<Boolean>(false)
    const [hamburger, sethamburger] = useState<Boolean>(false)
    return (
        <div className='grid grid-cols-12'>
            <div className='lg:col-span-2 lg:block hidden min-h-screen bg-[#2F2F2F]'>
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
                            <h1 className='cursor-pointer text-white capitalize ml-3  font-semibold' key={index}>{val}</h1>
                        ))
                    }
                    <div onClick={() => setshowDown(!showDown)} className='cursor-pointer flex items-center space-x-2'><h1 className='text-white capitalize ml-3  font-semibold'>Events</h1> <img src={Down} /></div>
                    {
                        showDown &&
                        <div className='!mt-2 !ml-2 space-y-2'>
                            {
                                ['Champria Chillin', 'champria challenge', 'SoS Spring 2022'].map((val, index) => (
                                    <h1 className='text-white capitalize ml-3  font-semibold cursor-pointer' key={index}>{val}</h1>
                                ))
                            }
                        </div>
                    }
                    <h1 className='cursor-pointer text-white capitalize ml-3  font-semibold'>About</h1>
                    <h1 className='cursor-pointer text-white capitalize ml-3  font-semibold'>Blog</h1>
                    <h1 className='cursor-pointer text-white capitalize ml-3  font-semibold'>Contact Us</h1>
                </div>
                {/* lists */}
            </div>
            <div className='relative lg:col-span-10 col-span-12 '>
                {/* sidebard */}
                {
                    hamburger ?
                        <Sidebar />
                        :
                        null
                }
                {/* sidebard */}
                {/* top section */}

                <div className='bg-blue-900 p-3'>
                    <div className=' flex items-center justify-between  '>
                        <div>
                            <GiHamburgerMenu onClick={() => sethamburger(!hamburger)} className='text-white lg:hidden ' />
                        </div>
                        <div className='flex items-center justify-end space-x-4'>
                            <AiOutlineSearch className='text-white' />
                            <BsFillBellFill className='text-white' />
                            <div className='flex items-center space-x-1'>
                                <div className='w-10 h-10 rounded-full border border-gray-500 overflow-hidden '>
                                    <img src={User} className='w-full h-full object-cover' />
                                </div>
                                <BsChevronDown className='text-white' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-white text-2xl font-bold'>My Scrims</h1>
                        <select className='border border-white text-white rounded-md bg-transparent outline-none py-1 px-3 mt-4'>
                            <option>Team Name</option>
                        </select>
                    </div>
                </div>
                {/* main bottom section */}
                <div className='flex items-center lg:justify-end justify-center'>
                    <div className='w-max p-5'>
                        <div className='flex items-center space-x-2'>
                            <h1 className='text-white text-xl font-bold'>Scrim reviews</h1>
                            <div className='w-max p-[2px] border border-white rounded'>
                                <BsChevronDown className='text-white' />
                            </div>
                            <div className='w-max p-[2px] border border-white rounded'>
                                <AiOutlineUp className='text-white' />
                            </div>
                        </div>
                        <ThumbElement />
                        <ThumbElement />
                        <ThumbElement />
                        <ThumbElement />
                        <ViewElement />
                        <ViewElement />
                        <ViewElement />
                    </div>
                </div>
                {/* main bottom section */}
            </div>
        </div>
    )
}

export default Dashboard