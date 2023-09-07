import { taskModalClose } from '@/feature/modal/taskModalSlice'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

const TaskModal = () => {

    const taskModal = useSelector((state) => state?.taskModalSlice)
    const dispatch = useDispatch()

    return (
        <div>
            <div
                className={`${taskModal ? `block` : `hidden`} inset-0 fixed flex items-center justify-center z-50`}>
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="bg-white p-4 rounded-lg z-10 min-w-[450px] relative">
                    <AiOutlineClose onClick={() => dispatch(taskModalClose())} className='absolute text-slate-800 right-4 cursor-pointer ' size={22} />
                    <div className="mx-auto flex flex-col">
                        <div className="flex items-center justify-center mb-[25px]">
                            <picture>
                                <img
                                    src="/favicon.ico"
                                    className="h-14 w-14 rounded-full"
                                    alt=""
                                />
                            </picture>
                        </div>
                        <h3 className="tracking-[0.24px] font-[600] text-[26px] text-[#00122e] mb-[30px] text-center">
                            Add Task
                        </h3>
                        <div className="mb-[18px] flex flex-col">
                            <label
                                className="text-[14px] font-medium text-[#666] mb-1"
                                htmlFor=""
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"

                                placeholder="Task Title"

                                className={` focus:outline-none border border-[#9c9a9a] py-[6px] pl-3 text-[14px] font-medium text-[#666] rounded relative w-full`}
                            />
                        </div>
                        <div className="mb-[18px] flex flex-col">
                            <label
                                className="text-[14px] font-medium text-[#666] mb-1"
                                htmlFor=""
                            >
                                Description
                            </label>
                            <textarea
                                type="text"
                                placeholder="Task Description"

                                name="description"
                                className={`focus:outline-none border border-[#9c9a9a] py-[6px] pl-3 text-[14px] font-medium text-[#666] rounded relative w-full`}
                            />
                        </div>
                        <div className="mb-[18px] flex flex-col">
                            <label
                                className="text-[14px] font-medium text-[#666] mb-1"
                                htmlFor=""
                            >
                                Due Date
                            </label>
                            <input
                                type="date"


                                name="due_date"
                                className={`focus:outline-none border border-[#9c9a9a] py-[6px] pl-3 text-[14px] font-medium text-[#666] rounded `}
                            />
                        </div>
                        <div className="mb-[18px] flex flex-col">
                            <label
                                className="text-[14px] font-medium text-[#666] mb-1"
                                htmlFor=""
                            >
                                Priority Level
                            </label>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type="radio"
                                        name="priority"
                                        className={`accent-purple-700 cursor-pointer h-4 w-4`}
                                    />
                                    <p className=''>Low</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type="radio"
                                        name="priority"
                                        className={`accent-purple-700 cursor-pointer h-4 w-4`}
                                    />
                                    <p className=''>Low</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type="radio"
                                        name="priority"
                                        className={`accent-purple-700 cursor-pointer h-4 w-4`}
                                    />
                                    <p className=''>Low</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <button
                                className="w-full text-[#fff] bg-purple-700 font-[600] uppercase  py-[8px] px-7 rounded shadow"
                            >
                                Add Task
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TaskModal