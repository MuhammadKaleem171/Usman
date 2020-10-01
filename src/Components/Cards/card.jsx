import React from 'react'
import './Card-style.css'
export const Card=props=>(
    <div className="card-container">
        <img alt="monster" src={props.monster.image} style={{width:200,height:300}} />
        <h2>{props.monster.name}</h2>
<p>{props.monster.email}</p>
    </div>


)