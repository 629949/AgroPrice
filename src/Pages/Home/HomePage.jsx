import React from 'react'
import AdminUserButton from '../../Components/Admin_UserButton.jsx'
import PriceContainer from '../../Components/PriceContainer/PriceContainer.jsx'


import './Home.css'

export default function HomePage() {
  return (
    <div className='homediv'>
        

      <h1>Welcome to the Home Page</h1>

      
    <div>
      <PriceContainer
      name= {'Maize'}
      Price = {'800'}
      height = {'150px'}
      width = {'170px'}
      BorderRadius = {'15px'}
      />
      <PriceContainer
      name= {'Maize'}
      Price = {'800'}
      height = {'150px'}
      width = {'170px'}
      BorderRadius = {'15px'}
      /> <PriceContainer
      name= {'Maize'}
      Price = {'800'}
      height = {'150px'}
      width = {'170px'}
      BorderRadius = {'15px'}
      />

    </div>
<AdminUserButton
name="Go to Admin Page"
/>
    </div>
  )
}