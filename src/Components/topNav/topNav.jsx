import './topNav.css'

export default function topNav() 
{
    return (
        <>
        
          <nav className="topNavContainer">
        <h2>MyMarket</h2>
        <AdminUserButton name="Go to Admin Page" />
      </nav>
        </>
    )
}