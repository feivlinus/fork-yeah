import styled from "styled-components";
import Image from "next/image";

export default function RecipeDetails({ recipeData }) {
  return (
    <RecipeCard>
      <h1> {recipeData.name}</h1>
      <StyledImage
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
    </RecipeCard>
  );
}

const RecipeCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled(Image)`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
