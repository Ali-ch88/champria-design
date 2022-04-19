import React from 'react'
import { BsHandThumbsUpFill } from 'react-icons/bs'
import { HiThumbDown } from 'react-icons/hi'
import { AiOutlineRight } from 'react-icons/ai'
const ThumbElement: React.FC = () => {
    return (
        <div className='text-white rounded-md flex mt-5'>
            <div className=' bg-[#2F2F2F] p-2 rounded-l-md'>
                <h1 className='font-bold'>PandaChan vd ddrs</h1>
                <h1 className='text-xs opacity-50'>Rocket League | NA-WEST</h1>
                <h1 className='text-xs opacity-50'>Nov 11 | 5:00PM EST | 1hour</h1>
            </div>
            <div className='bg-[#7735EF] flex items-center space-x-3 p-2 rounded-r-md'>
                <h1 className='font-bold italic'>VIEW</h1>
                <AiOutlineRight className='text-white font-bold' />
            </div>
        </div>
    )
}

export default ThumbElement