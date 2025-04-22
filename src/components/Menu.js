import React from 'react';

const Menu = ({meal}) => {
    return (
        <div>
            <li>{meal.strMeal}</li>
            <p>{meal.strCategory}</p>
            <em>{meal.strArea}</em>
            <img src={meal.strMealThumb} alt={meal.strMealThumb} />
            <a href={meal.strYoutube} ><h1>Tuto</h1></a>
            <h3>Instructions</h3>
            <i>{meal.strInstructions}</i>
        </div>
    );
};

export default Menu;