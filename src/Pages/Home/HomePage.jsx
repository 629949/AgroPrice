import React from 'react'
import AdminUserButton from '../../Components/Admin_UserButton.jsx'
import PriceContainer from '../../Components/PriceContainer/PriceContainer.jsx'

import {useState, useEffect} from 'react'



import './Home.css'

export default function HomePage() {

  




  return (

    <>
    
    <div className='homemain'>

      <nav>
                <h2>MyMarket</h2>
                <AdminUserButton
        name="Go to Admin Page"
        
        />
      </nav>

     
        
<div  className='homediv'>

  <div className="header">
 <h1>Welcome to the Home Page</h1>
  <p>Explore our products and prices below.</p>
  </div>


     

      {/* price container */}
    <div className='pricecontainerdiv'>
      <PriceContainer
      name= {'Maize'}
      Price = {'800'}
      height = {'150px'}
      width = {'300px'}
      BorderRadius = {'15px'}
      />
      <PriceContainer
      name= {'Maize'}
      Price = {'800'}
      height = {'150px'}
      width = {'300px'}
      BorderRadius = {'15px'}
      /> <PriceContainer
      name= {'Maize'}
      Price = {'800'}
      height = {'150px'}
      width = {'300px'}
      BorderRadius = {'15px'}
      />

    </div>

    </div>

    </div>

    </>
  )
}
