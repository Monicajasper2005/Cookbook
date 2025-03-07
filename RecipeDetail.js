import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../recipes.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe Not Found</h2>;
  }
  return (
    <div className="recipe-detail">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <iframe width="560" height="315" src={recipe.video} title="Recipe Video"></iframe>
    </div>
  );
};

export default RecipeDetail;
