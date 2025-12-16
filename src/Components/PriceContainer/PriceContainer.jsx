import './Price.css'

import { Supabase } from '../../src/SupabaseClient.js'
import {useState, useEffect} from 'react'

export default function PriceContainer({name, Price, width, height, BorderRadius})
{

    const Styles = {
        height: height,
        width: width,
        borderRadius: BorderRadius
   


    }


    const [state, useState] = useState([])
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState (null)
    
      useEffect(() => {
        const fetchData = async () =>{
          try {
            const {data, error} = await supabase
            .from('ProductPrices')
            .select('*')
          }
          catch (error) {
            setError('Error fetching data')
            console.error('Error fetching data:', error)
          }
        }
        fetchData()
      }, [])

    return (
        <div className='price-container' style={Styles}>

            <div className='price-info'>

           {prices.map(price => (
          <li key={price.id}>
            {price.price_date} — UGX {price.price_ugx_per_kg}
          </li>
        ))}

            </div>
           

            <div className='additional-info'>
                <p className='updatedtag'> Updated: Today</p>
               <p className='wholesaletag'> Wholesale</p>
            </div>
           
        </div>
    )
}