import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import DeleteRecipe from "./DeleteRecipe";

export default function RecipeDetails({ recipeDetails, handleDeleteRecipe }) {
  return (
    <>
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
      </RecipeCard>
      <StyledActionElementsContainer>
        <StyledLink href="/">⬅ Back</StyledLink>
        <DeleteRecipe
          onDeleteRecipe={handleDeleteRecipe}
          recipeId={recipeDetails.id}
        />
      </StyledActionElementsContainer>
    </>
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
  margin: 1rem;
`;

const StyledLink = styled(Link)`
  all: unset;
  background-color: #000;
  padding: 5px 32px;
  font-size: 1rem;
  border-radius: 0.4em;
  color: #fff;
`;

const StyledActionElementsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;
