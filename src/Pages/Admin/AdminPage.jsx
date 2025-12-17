import React from 'react';
import AdminUserButton from '../../Components/Admin_UserButton.jsx'
import './Admin.css'



function Admin(){
    return (
        <div className="admin-page">

            <div className="admin-container">
     <h1>Admin Page</h1>

     <form action="" >
        <label htmlFor="Market">Market:</label>
        <input id="Market" />


        {/* market, price, date , notes(optional) */}

        <label htmlFor="price">Price</label>
        <input id="price" />

        <label htmlFor="date">Date</label>
        <input id="date" type="date" />

        <label htmlFor="notes">Notes</label>
        <input id="notes" />

        <button>
            Submit
        </button>
     </form>
            </div>
       
           
            <AdminUserButton 
            name="Go to Home Page"
            />
        </div>
    )
}

export default Admin;