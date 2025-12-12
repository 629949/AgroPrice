import React from 'react'
import AdminUserButton from '../../Components/Admin_UserButton.jsx'
import PriceContainer from '../../Components/PriceContainer/PriceContainer.jsx'


import './Home.css'

export default function HomePage() {
  return (
    <div>
        

      <h1>Welcome to the Home Page</h1>

      
    <div>
      <PriceContainer
      name= {'Maize'}
      Price = {'800'}
      />
      {/* <PriceContainer/>
      <PriceContainer/>
      <PriceContainer/> */}

    </div>
<AdminUserButton
name="Go to Admin Page"
/>
    </div>
  )
}