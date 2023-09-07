import Header from '@/Layout/Header'
import TaskLevel from '@/components/TaskLevel'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiFilter } from 'react-icons/bi'
import { RxCaretSort } from 'react-icons/rx'
import Layout from '@/Layout/Layout'
const Home = () => {

  const [showFilterBox, setShowFilterBox] = useState(false)
  const [showSortBox, setshowSortBox] = useState(false)

  return (
    <Layout>
      <div className='px-[80px] flex items-center justify-between bg-white h-11'>
        <div className='flex items-center relative w-[30%]'>
          <input type="text" placeholder='Search task' className='px-3 py-[6px] text-slate-700 text-[15px] font-medium focus:outline-none bg-slate-200 w-[100%] rounded-sm' />
          <AiOutlineSearch className='absolute right-0 text-slate-700 mr-2' size={22} />
        </div>
        <div className='flex items-center gap-32'>
          <div className='relative'>
            <div onClick={() => setShowFilterBox(!showFilterBox)} className='flex items-center gap-1 cursor-pointer'>
              <BiFilter className='text-slate-700' size={22} />
              <p className='text-[16px] font-medium text-slate-700'>FILTER</p>
            </div>

            <div className={`${showFilterBox ? `block` : `hidden`} absolute px-2 py-4 bg-white shadow-md top-7 right-0`}>
              <div className='flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-sm mb-[3px]'>
                <input type="radio" name="filter" id="" className='cursor-pointer' />
                <p className='text-[15px] font-medium text-slate-700 whitespace-nowrap'>Completed</p>
              </div>
              <div className='flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-sm mb-[3px]'>
                <input type="radio" name="filter" id="" className='cursor-pointer' />
                <p className='text-[15px] font-medium text-slate-700 whitespace-nowrap'>In Progress</p>
              </div>
              <div className='flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-sm mb-[3px]'>
                <input type="radio" name="filter" id="" className='cursor-pointer' />
                <p className='text-[15px] font-medium text-slate-700 whitespace-nowrap'>Pending</p>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div onClick={() => setshowSortBox(!showSortBox)} className='flex items-center gap-1 cursor-pointer'>
              <RxCaretSort className='text-slate-700' size={22} />
              <p className='text-[16px] font-medium text-slate-700'>SORT</p>
            </div>
            <div className={`${showSortBox ? `block` : `hidden`} absolute px-2 py-4 bg-white shadow-md top-7 right-0`}>
              <div className='flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-sm mb-[3px]'>
                <input type="radio" name="sort" id="" className='cursor-pointer' />
                <p className='text-[15px] font-medium text-slate-700 whitespace-nowrap'>High Priority</p>
              </div>
              <div className='flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-sm mb-[3px]'>
                <input type="radio" name="sort" id="" className='cursor-pointer' />
                <p className='text-[15px] font-medium text-slate-700 whitespace-nowrap'>Normal Priority</p>
              </div>
              <div className='flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-sm mb-[3px]'>
                <input type="radio" name="sort" id="" className='cursor-pointer' />
                <p className='text-[15px] font-medium text-slate-700 whitespace-nowrap'>Due</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-[120px] grid grid-cols-3 gap-20 mt-10'>
        <TaskLevel />
      </div>
    </Layout>
  )
}

export default Home