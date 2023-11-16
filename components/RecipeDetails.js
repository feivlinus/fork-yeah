import styled from "styled-components";
import Image from "next/image";

export default function RecipeDetails({ recipeData }) {
  return (
    <>
      <h1> {recipeData.name}</h1>
      <Image
        src={recipeData.imageURL}
        alt={recipeData.name}
        width={300}
        height={300}
      />

      <ul>
        {recipeData.ingredients.map((ingredient) => (
          <li key={ingredient.ingredient}>
            {ingredient.ingredient} - {ingredient.quantity}
          </li>
        ))}
      </ul>
      <p>{recipeData.description}</p>
    </>
  );
}

const RecipeCard = styled.article``;
