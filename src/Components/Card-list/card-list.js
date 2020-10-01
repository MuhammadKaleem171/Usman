import React from 'react'
import {Card} from '../Cards/card'
import './cards-list-style.css'

export const Cardslist= props =>{
  console.log(props)
return (<div className="card-list">

     {props.monsters.map(monster=>(
     <Card key={monster.id} monster={monster} />
      ))}
    
    </div>
     )
}