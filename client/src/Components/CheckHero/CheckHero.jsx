import React from 'react'
import "./CheckHero.scss"
// import SearchBar from '../SearchBar/SearchBar'
function CheckHero() {

  return (
    <section className="hero-container"  >
        
        <div className="hero-content">
            <div className="hero-image" style={{backgroundImage:`url("../images/high.jpg")`}}>
               
            </div>
            <h1>Check Availability</h1>
        
            {/* <SearchBar /> */}
        
        {/* <button className="cta-button">Get Cooking</button> */}
        </div>
    </section>
  )
}

export default CheckHero