import React from 'react'
import Logo from './../../assets/bottomlogo.png'
import { FaTwitch } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='bg-[#2F2F2F] text-white opacity-50 lg:p-9 p-4 grid lg:grid-cols-2 grid-cols-1 gap-5 !font-sans'>
            <div className='flex items-center justify-center lg:justify-start space-x-5'>
                <img
                    className='cursor-pointer'
                    src={Logo}
                    alt=''
                />
                <div className='flex items-center space-x-3'>
                    <span className='text-[12px] cursor-pointer'>©2022 Champria.gg</span>
                    <span className='text-[12px] cursor-pointer'>Terms of Service</span>
                    <span className='text-[12px] cursor-pointer'>Privacy Policy</span>
                </div>
            </div>
            <div className='flex items-center lg:justify-end justify-center space-x-3'>
                <h1 className=' text-[12px]'>Connect with us</h1>
                <FaTwitch className='cursor-pointer' />
                <FaFacebookF className='cursor-pointer' />
                <FaTwitter className='cursor-pointer' />
                <FaInstagram className='cursor-pointer' />
                <FaLinkedinIn className='cursor-pointer' />
            </div>
        </div>
    )
}

export default Footer