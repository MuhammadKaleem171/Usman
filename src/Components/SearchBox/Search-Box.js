import React from 'react'
import './Searchbox-styles.css'

export const SearchBox =({placeholder,handleChange})=>(

    <input
    className="search" 
    type="search" 
    placeholder={placeholder}
     onChange={handleChange}/>
)



