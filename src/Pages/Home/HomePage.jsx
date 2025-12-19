// 'use client';

import { useState, useEffect } from "react";
import PriceContainer from "../../Components/PriceContainer/PriceContainer.jsx";
import SideNav from "../../Components/sideNav.jsx";
import PriceGraph from "../../Components/graphComponent.jsx";
import { supabase } from "../../SupabaseClient";
import topNav from "../../Components/topNav/topNav.jsx";

import "./Home.css";

export default function HomePage() {
  // 1️⃣ STATE (defined first)
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2️⃣ FETCH DATA
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const { data, error } = await supabase
          .from("ProductPrices")
          .select("Price, created_at")
          .order("created_at", { ascending: false })
          .limit(1);

        if (error) throw error;

        setPrices(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load prices");
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);


  //latesprices
  const latestPrices = prices[0];

  // 3️⃣ HANDLE STATES
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // 4️⃣ PREPARE GRAPH DATA
  const graphData = prices
    .map(item => ({
      date: item.created_at.split("T")[0],
      price: item.Price,
    }));

  

  // 5️⃣ RENDER UI
  return (
    <div className="homemain">

      <div className="topNav">
          <topNav />

      </div>
    
   
      <div className="homediv">

        <div className="sideNav">
<SideNav />
        </div>
        

        <div className="header">

          <div className="welcome-section">

          <h1>Welcome to the Home Page</h1>
          <p>Explore our products and prices below.</p>
        
          </div>
       

        {/* PRICE CARDS */}
        <div className="pricecontainerdiv">
          {prices.map(item => (
            <PriceContainer
              data={latestPrices}
              key={item.id}
              name={item.product_name ?? "Maize"}
              Price={item.Price}
              height="150px"
              width="300px"
              BorderRadius="15px"
            />
          ))}
        </div>

        <div className="graphsection">
          <PriceGraph data={graphData} type="line" />
          <PriceGraph data={graphData} type="bar" />
        </div>
        </div>

        {/* GRAPH */}
       
      </div>
    </div>
  );
}
