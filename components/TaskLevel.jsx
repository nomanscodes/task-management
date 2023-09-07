import React from 'react'
import { BsThreeDots, } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { HiArrowSmRight } from 'react-icons/hi'

const TaskLevel = () => {
    return (
        <div className=''>
            <div className='flex items-center justify-between text-slate-800 bg-white w-full p-3 uppercase rounded-sm shadow-sm border-t-2 border-y-teal-600'>
                <div className='flex items-center gap-2 text-[17px] font-semibold'>
                    <p>In Progress</p>
                    <p className='flex items-center justify-center h-5 w-5 rounded-full border-[1px] shadow'>7</p>
                </div>
                <div className='flex items-center gap-3'>
                    <BsThreeDots size={22} className='cursor-pointer' />
                    <AiOutlinePlus size={21} className='cursor-pointer text-sky-600' />
                </div>
            </div>
            <div className='mt-3 flex flex-col gap-3'>
                <div className='p-3 bg-white rounded-sm shadow-sm text-slate-800'>
                    <h2 className='font-medium text-[17px] letter-specing-1 mb-1'>This Is Title</h2>
                    <p className='text-[15px] mb-4'>This is description </p>
                    <div className='flex items-center justify-between mb-3'>
                        <p className='text-[15px]'>12-05-2023</p>
                        <p className='text-[15px] font-medium bg-green-600 text-white p-[6px] rounded-sm '>Priority level</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-[16px] font-medium'>Move to</p>
                        <div className='flex items-center gap-3'>
                            <div className='flex items-center gap-1 bg-gray-200 p-1 rounded-sm cursor-pointer text-slate-800'>
                                <p className='font-medium text-[14px]'>Due</p>
                                <HiArrowSmRight size={20} />
                            </div>
                            <div className='flex items-center gap-1 bg-gray-200 p-1 rounded-sm cursor-pointer text-slate-800'>
                                <p className='font-medium text-[14px]'>Complete</p>
                                <HiArrowSmRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskLevel