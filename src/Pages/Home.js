import React,{Component} from 'react';
import '../App.css';
import {Cardslist} from '../Components/Card-list/card-list'
import {DISHES} from '../Components/Card-list/Shared/Dish'

import {SearchBox} from '../../src/Components/SearchBox/Search-Box'

import{SlideChangeHooks} from '../Components/SLiderComponent/Slider'


 export default class  Home extends Component{
    constructor(){
      super();
      this.state={
        monsters:DISHES,
        searchField:''
      };
    }
    
    
      render(){
    const {monsters,searchField}   =this.state;
    
    const filtermonster= monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
      
      return (
        <div className="App">
    < SearchBox placeholder="search "
     handleChange={e=> this.setState({searchField:e.target.value})}/>
     <SlideChangeHooks/>
          <Cardslist monsters={filtermonster}  />
        
        </div>
      );
    }
    }
    
      
    