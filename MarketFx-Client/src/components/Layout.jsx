import React from "react";
import { Outlet } from "react-router-dom";
import AppFooter from "./AppFooter";
import Header from "./Header";

const Layout = ()=>{
    return (
        <>
            <Header />
            <Outlet />
            <AppFooter />
        </>
    )
}

export default Layout;