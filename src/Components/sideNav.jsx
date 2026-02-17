import React from "react";
import { Link } from "react-router-dom";

import "./sideNav.css"

export default function sideNav({height,width}) 
{


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

               
               <button >
<img src="./src/images/moon.svg" alt="darkmode toggle" />
                </button> 
            </div>
        
        </>
    )
}