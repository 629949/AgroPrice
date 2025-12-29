import React from "react";
import AdminUserButton from "../../Components/Admin_UserButton.jsx";
import './topNav.css'

export default function TopNav() 
{
    return (
        <>
        
       <nav className="topNavContainer">
        <h2>MyMarket</h2>
        <AdminUserButton name="Go to Admin Page" />
      </nav>
        </>
    )
}