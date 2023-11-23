import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function RecipeDetails({ recipeDetails }) {
  return (
    <RecipeCard>
      <h1> {recipeDetails.name}</h1>
      <StyledImage
        src={
          recipeDetails.imageURL
            ? recipeDetails.imageURL
            : "/recipe-images/generic-food-3.png"
        }
        alt={recipeDetails.name}
        width={300}
        height={300}
      />
      <p>⏰ {recipeDetails.preparationTime}</p>
      <ul>
        {recipeDetails.ingredients.map(
          (ingredient) =>
            ingredient.ingredient && (
              <li key={ingredient.ingredient}>
                {ingredient.quantity} - {ingredient.ingredient}
              </li>
            )
        )}
      </ul>
      <StyledDescription>{recipeDetails.description}</StyledDescription>
      <StyledLink href="/">⬅ Back</StyledLink>
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

const StyledDescription = styled.p`
  margin: 2em 2em;
`;

const StyledLink = styled(Link)`
  border: 1rem solid black;
  background-color: #000;
  color: #fff;
  text-decoration: none;
`;
