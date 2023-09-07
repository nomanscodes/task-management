import { userIn, userOut } from '@/feature/authSlice'
import { LModalOpen } from '@/feature/modal/loginModalSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {

    const [showUserInfo, setShowUserInfo] = useState(false)

    const [loggedUser, setLoggedUser] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        const loggedinUser = JSON.parse(localStorage.getItem("loggedInUser"))
        setLoggedUser(loggedinUser)
    }, [])


    const loggedOut = () => {
        localStorage.removeItem("loggedInUser")
        setShowUserInfo(false)
        dispatch(LModalOpen())
        dispatch(userOut())
    }

    return (
        <div className='px-[80px] py-[10px] bg-white  flex items-center justify-between border-b-[1px]'>
            <p className='uppercase text-[20px] font-bold text-purple-700'>
                task mania
            </p>
            <div className='text-[16px] flex items-center gap-2  relative'>
                <picture>
                    <img src={loggedUser?.profilePic} onClick={() => setShowUserInfo(!showUserInfo)} className='h-[38px] w-[38px] rounded-full cursor-pointer' alt="" />
                </picture>
                <p className='font-medium text-slate-700'>{loggedUser?.user_name}</p>

                <div className={`${showUserInfo ? `block` : `hidden`} z-10  absolute bg-white shadow-md rounded right-0 top-10 flex items-center flex-col pt-4`}>
                    <p className='text-[15px] text-slate-800 font-semibold whitespace-nowrap hover:bg-slate-200 duration-200 transition-all cursor-pointer px-7 py-[7px] w-full'>Deshboard</p>
                    <p onClick={loggedOut} className='text-[15px] text-slate-800 font-semibold whitespace-nowrap hover:bg-slate-200 duration-200 transition-all cursor-pointer px-7 py-[7px] w-full'>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Header