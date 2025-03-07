import React from "react";
import { Link } from "react-router-dom";
import recipes from "../recipes.json";

const Recipes = () => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <Link to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
