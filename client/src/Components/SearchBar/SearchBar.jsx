import React from 'react'
import "./SearchBar.scss"
function SearchBar() {
  return (
    <div class="search-box">
  <input class="search-input" type="text" placeholder="Search by Faculty Name.." />
  <button class="search-btn"><i class="fas fa-search"></i></button>
</div>  
  )
}

export default SearchBar