import './Price.css'

import { supabase } from "../../SupabaseClient";

import {useState, useEffect} from 'react'

export default function PriceContainer({name, Price, width, height, BorderRadius, data})
{

    const Styles = {
        height: height,
        width: width,
        borderRadius: BorderRadius
   


    }


  
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)
      const [prices, setPrices] = useState([])
    
      useEffect(() => {
        const fetchData = async () =>{
          setLoading(true)
          try {
            const {data, error} = await supabase
            .from('ProductPrices')
            .select('*')
              .order("created_at", { ascending: false })
    .limit(1);

            if (error) {
              throw error
            }
            setPrices(data)
          }
          catch (error) {
            setError('Error fetching data')
            console.error('Error fetching data:', error)
          }
          finally {
          setLoading(false)
          }
        }

        fetchData()

 ;
 
      }, [])

      if (loading) {
        return <div>Loading...</div>
      }else if (error) {
        return <div>{error}</div>
      }

    return (
        <div className='price-container' style={Styles}>

            <div className='price-info'>{prices.map((Price) => (
              <div key={Price.id}>
                <h3>{name}</h3>
                <p>${Price.Price}</p>
              </div>
            ))}
            </div>
           

            <div className='additional-info'>
                <p className='updatedtag'> Updated: Today</p>
               <p className='wholesaletag'> Wholesale</p>
            </div>
           
        </div>
    )
}