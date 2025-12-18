import { useState, useEffect } from "react";
import AdminUserButton from "../../Components/Admin_UserButton.jsx";
import PriceContainer from "../../Components/PriceContainer/PriceContainer.jsx";
import SideNav from "../../Components/sideNav.jsx";
import PriceGraph from "../../Components/graphComponent.jsx";
import { supabase } from "../../SupabaseClient";

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
          .select("*")
         

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

  // 3️⃣ HANDLE STATES
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // 4️⃣ PREPARE GRAPH DATA
  const graphData = prices
    .filter(item => item && item.created_at && item.Price != null)
    .map(item => ({
      date: item.created_at.split("T")[0],
      price: item.Price, // ⚠️ match DB column name exactly
    }));

  // 5️⃣ RENDER UI
  return (
    <div className="homemain">
      <nav>
        <h2>MyMarket</h2>
        <AdminUserButton name="Go to Admin Page" />
      </nav>

      <div className="homediv">
        <SideNav />

        <div className="header">
          <h1>Welcome to the Home Page</h1>
          <p>Explore our products and prices below.</p>
        </div>

        {/* PRICE CARDS */}
        <div className="pricecontainerdiv">
          {prices.map(item => (
            <PriceContainer
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

        {/* GRAPH */}
       
      </div>
    </div>
  );
}
