import React from "react";
import { Link } from "react-router-dom";

import "./sideNav.css"

export default function sideNav({height,width}) 
{

    // const style ={
    //     height:"screen",
    //     width:"400px",
    //     color: 'black'
    // }


    return (
        <>
            <div className="sidebarComponent" >
                <nav className="sidebarNav">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/addcrop">AddCrop</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                    </ul>
                </nav>
            </div>
        
        </>
    )
}