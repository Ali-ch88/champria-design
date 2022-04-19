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
import Footer from './Footer'

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
                <div className='bg-[#7635EF] flex items-center justify-center p-2 space-x-3 py-8'>
                    <img
                        className='w-[30.30px] h-[30.30px] object-contain'
                        src={Logo}
                    />
                    <h1 className='uppercase text-white font-bold text-lg'>champria</h1>
                </div>
                {/* logo cont */}
                {/* lists */}
                <div className=' p-3 space-y-4 mt-2'>
                    {
                        Links.map((val, index) => (
                            <h1 className='cursor-pointer text-white capitalize ml-3   text-[13px]  !font-sans' key={index}>{val}</h1>
                        ))
                    }
                    <div onClick={() => setshowDown(!showDown)} className='cursor-pointer flex items-center space-x-2'><h1 className='text-white capitalize ml-3  text-[13px]  !font-sans'>Events</h1> <img src={Down} /></div>
                    {
                        showDown &&
                        <div className='!mt-2 !ml-2 space-y-2'>
                            {
                                ['Champria Chillin', 'champria challenge', 'SoS Spring 2022'].map((val, index) => (
                                    <h1 className='text-white capitalize ml-3  text-[13px]  !font-sans cursor-pointer' key={index}>{val}</h1>
                                ))
                            }
                        </div>
                    }
                    <h1 className='cursor-pointer text-white capitalize ml-3  text-[13px]  !font-sans'>About</h1>
                    <h1 className='cursor-pointer text-white capitalize ml-3  text-[13px]  !font-sans'>Blog</h1>
                    <h1 className='cursor-pointer text-white capitalize ml-3 text-[13px]  !font-sans'>Contact Us</h1>
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
                            <AiOutlineSearch className='text-white !w-[24px] !h-[24px]' />
                            <BsFillBellFill className='text-white !w-[17px] !h-[17px]' />
                            <div className='flex items-center space-x-1'>
                                <div className='w-[40px] h-[40px] rounded-full border border-gray-500 overflow-hidden '>
                                    <img src={User} className='w-full h-full object-cover' />
                                </div>
                                <BsChevronDown className='text-white !w-[15px] !h-[15px]' />
                            </div>
                        </div>
                    </div>
                    <div className='ml-4 mb-5 mt-4'>
                        <h1 style={{
                            fontFamily: ''
                        }} className='text-white text-[42px] font-extrabold lg:text-left text-center'>My Scrims</h1>
                        <div className='lg:space-x-3 lg:space-y-0 space-y-5 flex items-center flex-col lg:flex-row lg:mt-4'>
                            <select className='border-2  text-sm w-[220px] h-[40px] font-extrabold border-white text-white rounded-[6px] bg-transparent outline-none py-1 px-3 lg:mt-0 mt-4'>
                                <option>Team Name</option>
                            </select>
                            <button className='capitalize text-[14px] w-[125px] h-[40px] text-white font-bold bg-[#7FB8F4] py-1.5 px-3 rounded-[6px] text-sm'>create scrim</button>
                        </div>
                    </div>
                </div>
                {/* main bottom section */}
                <div className='flex items-center lg:justify-end justify-center'>
                    <div className='w-max px-5 mt-8 mb-32'>
                        <div className='flex items-center justify-between space-x-2'>
                            <h1 className='text-white text-[24px] font-extrabold'>Scrim reviews</h1>
                            <div className='flex items-center space-x-2'>
                                <div className='w-max p-[2px] border border-white rounded border-opacity-50'>
                                    <BsChevronDown className='text-white' />
                                </div>
                                <div className='w-max p-[2px] border border-white rounded border-opacity-50'>
                                    <AiOutlineUp className='text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='!space-y-1'>
                            <ThumbElement />
                            <ThumbElement />
                            <ThumbElement />
                            <ThumbElement />
                            <ViewElement />
                            <ViewElement />
                            <ViewElement />
                        </div>
                    </div>
                </div>
                {/* main bottom section */}
            </div>
        </div>
    )
}

export default Dashboard