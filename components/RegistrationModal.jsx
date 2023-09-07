import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LModalClose, LModalOpen } from "@/feature/modal/loginModalSlice";
import { RgModalClose } from "@/feature/modal/registrationModalSlice";


const RegistrationModal = () => {

    const registrationModal = useSelector((state) => state?.registrationModalSlice);

    const dispatch = useDispatch();


    const [userInfo, setUserInfo] = useState({
        user_name: '',
        bio: '',
        password: '',
        profilePic: '',
    });

    const [userProfiles, setUserProfiles] = useState([]);

    useEffect(() => {
        const storedUserProfiles = JSON.parse(localStorage.getItem('userProfiles'));
        if (storedUserProfiles) {
            setUserProfiles(storedUserProfiles);
        }
    }, []); 

    const saveUserProfilesToLocalStorage = (profiles) => {
        localStorage.setItem('userProfiles', JSON.stringify(profiles));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [name]: value,
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                setUserInfo((prevUserInfo) => ({
                    ...prevUserInfo,
                    profilePic: event.target.result,
                }));
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSaveClick = () => {
        if (userInfo.user_name === '' || userInfo.bio === '' || userInfo.password === '') {
            alert('Name, Bio, and Password must not be empty.');
            return;
        }

        const newUserProfile = {
            user_name: userInfo.user_name,
            bio: userInfo.bio,
            password: userInfo.password,
            profilePic: userInfo.profilePic,
        };

        const updatedUserProfiles = [...userProfiles, newUserProfile];

        saveUserProfilesToLocalStorage(updatedUserProfiles);
        setUserInfo({
            user_name: '',
            bio: '',
            password: '',
            profilePic: '',
        });
        setUserProfiles(updatedUserProfiles);
        dispatch(RgModalClose())
        dispatch(LModalOpen())
    };

    const modalControl = () => {
        dispatch(RgModalClose())
        dispatch(LModalOpen())
    }


    return (
        <div className={`${registrationModal ? `block` : `hidden`} inset-0 fixed flex items-center justify-center z-50`}>
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
                        Registration
                    </h3>
                    <div className="mb-[18px] flex flex-col">
                        <label
                            className="text-[14px] font-medium text-[#666] mb-1"
                            htmlFor=""
                        >
                            User Name
                        </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="user_name"
                            placeholder="User Name"
                            value={userInfo.user_name}
                            className={` focus:outline-none border border-[#9c9a9a] py-[6px] pl-3 text-[14px] font-medium text-[#666] rounded relative w-full`}
                        />
                    </div>
                    <div className="mb-[18px] flex flex-col">
                        <label
                            className="text-[14px] font-medium text-[#666] mb-1"
                            htmlFor=""
                        >
                            Bio
                        </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Enter Your Bio"
                            value={userInfo.bio}
                            name="bio"
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
                            onChange={handleInputChange}
                            type="password"
                            placeholder="Enter Your Password"
                            value={userInfo.password}
                            name="password"
                            className={` focus:outline-none border border-[#9c9a9a] py-[6px] pl-3 text-[14px] font-medium text-[#666] rounded relative w-full`}
                        />
                    </div>
                    <div className="mb-[18px] flex flex-col">
                        <label
                            className="text-[14px] font-medium text-[#666] mb-1"
                            htmlFor=""
                        >
                            Profile Pic
                        </label>
                        <input
                            onChange={handleImageUpload}
                            type="file"
                            accept="image/*"
                            name="profile_pic"
                            className={` focus:outline-none border border-[#9c9a9a] py-[6px] pl-3 text-[14px] font-medium text-[#666] rounded relative w-full`}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 mb-[20px]">
                        <h1 className="text-[11px] font-medium text-[#666]">
                            Allready have an account?
                        </h1>
                        <h1 onClick={modalControl} className="text-[14px]  text-[#ee6424] font-medium cursor-pointer hover:underline">
                            Login now
                        </h1>
                    </div>
                    <div className="flex items-center ">
                        <button onClick={handleSaveClick} className="w-full text-[#fff] bg-sky-600 font-[600] uppercase  py-[8px] px-7 rounded shadow">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationModal;
