/* eslint-disable react/no-unescaped-entities */
import { userIn, userOut } from "@/feature/authSlice";
import { LModalClose } from "@/feature/modal/loginModalSlice";
import { RgModalOpen } from "@/feature/modal/registrationModalSlice";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const LoginModal = () => {
    const loginModal = useSelector((state) => state?.loginModalSlice);

    const dispatch = useDispatch();

    const [registeredUsers, setRegisteredUsers] = useState([]);

    const [user, setUser] = useState({
        user_name: '',
        password: '',
    });

    const updateUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const modalControl = () => {
        dispatch(LModalClose());
        dispatch(RgModalOpen());
    };

    useEffect(() => {
        const rUser = localStorage.getItem('userProfiles');
        if (rUser) {
            setRegisteredUsers(JSON.parse(rUser));
        }
    }, [loginModal]);

    const submitHandler = () => {
        if (!registeredUsers) {
            alert('No registered users found.');
            return;
        }
        const matchingUser = registeredUsers.find((single_user) =>
            user.user_name === single_user?.user_name && user.password === single_user?.password
        );
        if (matchingUser) {
            localStorage.setItem('loggedInUser', JSON.stringify(matchingUser));
            dispatch(LModalClose());
            dispatch(userIn());
            setUser({
                user_name: '',
                password: ''
            });
        } else {
            alert('User Does not match');
        }
    };


    return (
        <div
            className={`${loginModal ? `block` : `hidden`
                } inset-0 fixed flex items-center justify-center z-50`}
        >
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-4 rounded-lg z-10 min-w-[330px]">
                <div className="max-w-[80%] mx-auto flex flex-col">
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
                        Login
                    </h3>
                    <div className="mb-[18px] flex flex-col">
                        <label
                            className="text-[14px] font-medium text-[#666] mb-1"
                            htmlFor=""
                        >
                            User Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            onChange={updateUser}
                            placeholder="Enter Your User Name"
                            value={user.user_name}
                            className={` focus:outline-none border border-[#9c9a9a] py-[6px] pl-3 text-[14px] font-medium text-[#666] rounded relative w-full`}
                        />
                    </div>
                    <div className="mb-[18px] flex flex-col">
                        <label
                            className="text-[14px] font-medium text-[#666] mb-1"
                            htmlFor=""
                        >
                            Password
                        </label>
                        <input
                            onChange={updateUser}
                            type="password"
                            placeholder="Enter Your Password"
                            value={user.password}
                            name="password"
                            className={`focus:outline-none border border-[#9c9a9a] py-[6px] pl-3 text-[14px] font-medium text-[#666] rounded relative w-full`}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 mb-[20px]">
                        <h1 className="text-[11px] font-medium text-[#666]">
                            Don't have an account?
                        </h1>
                        <h1
                            onClick={modalControl}
                            className="text-[14px]  text-[#ee6424] font-medium cursor-pointer hover:underline"
                        >
                            Sign up now
                        </h1>
                    </div>
                    <div className="flex items-center ">
                        <button
                            onClick={submitHandler}
                            className="w-full text-[#fff] bg-sky-600 font-[600] uppercase  py-[8px] px-7 rounded shadow"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
