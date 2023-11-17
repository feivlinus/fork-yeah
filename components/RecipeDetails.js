import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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
      <p>⏰ {recipeData.preparationTime}</p>
      <ul>
        {recipeData.ingredients.map((ingredient) => (
          <li key={ingredient.ingredient}>
            {ingredient.ingredient} - {ingredient.quantity}
          </li>
        ))}
      </ul>
      <StyledDescription>{recipeData.description}</StyledDescription>
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
