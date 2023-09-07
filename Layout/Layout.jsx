import React, { useEffect, useState } from "react";
import Header from "./Header";
import LoginModal from "@/components/LoginModal";
import RegistrationModal from "@/components/RegistrationModal";
import { useDispatch, useSelector } from "react-redux";
import { LModalOpen, LModalClose } from "@/feature/modal/loginModalSlice";
import { userIn, userOut } from "@/feature/authSlice";

const Layout = ({ children }) => {
    const dispatch = useDispatch();

    const userAuth = useSelector((state) => state?.authSlice);

    useEffect(() => {
        const user = localStorage.getItem("loggedInUser");
        const parseUser = JSON.parse(user);
        if (!parseUser) {
            dispatch(LModalOpen());
        } else {
            dispatch(LModalClose())
            dispatch(userIn())
        }
    }, []);


    return (
        <div>
            <LoginModal />
            <RegistrationModal />
            {userAuth && (
                <div>
                    <Header />
                    <div>{children}</div>
                </div>
            )}
        </div>
    );
};

export default Layout;
