import React from 'react'
import { BsHandThumbsUpFill } from 'react-icons/bs'
import { HiThumbDown } from 'react-icons/hi'
const ThumbElement: React.FC = () => {
    return (
        <div className='text-white rounded-md flex mt-5'>
            <div className=' bg-[#2F2F2F] p-2 rounded-l-md'>
                <h1 className='font-bold'>PandaChan vd ddrs</h1>
                <h1 className='text-xs opacity-50'>Rocket League | NA-WEST</h1>
                <h1 className='text-xs opacity-50'>Nov 11 | 5:00PM EST | 1hour</h1>
            </div>
            <div className='bg-[#7735EF] flex items-center space-x-1 p-2 rounded-r-md'>
                <BsHandThumbsUpFill className='text-white' />
                <span className='bg-transparent text-white border-2 italic p-[1px] rounded border-white font-bold text-xs uppercase'>Meh</span>
                <HiThumbDown className='text-white' />
            </div>
        </div>
    )
}

export default ThumbElement