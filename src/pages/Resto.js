import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Menu from '../components/Menu';

const Resto = () => {
    const [data,setData]=useState([])
    const[search,setSearch]=useState('')
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+ search)
        .then((res)=>setData(res.data.meals))

    },[search])
    
    return (
        <div >
            <Navigation/>
            <div className="resto">

            <h1 className='header'>Our Meals</h1>
            <input type="text" placeholder='meal...' onChange={e=>setSearch(e.target.value)}/>

            <ul>
        {data && data
        // .filter((meal)=>meal.strMeal.toLocaleLowerCase().includes(search)  
    // ) 
            .slice(0,24)
        .map(meal=>
        <li><Menu key={meal.id} meal={meal}/></li>
                )}
            </ul>
            </div>
        </div>
    );
};

export default Resto;