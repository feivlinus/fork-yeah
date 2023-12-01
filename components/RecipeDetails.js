import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import TrashBin from "public/svg/TrashBin.svg";
import { useRouter } from "next/router";
import { v4 as uuidv4, v4 } from "uuid";
import ToggleFavoriteRecipe from "./ToggleFavoriteRecipe";

export default function RecipeDetails({
  recipeDetails,
  onDeleteRecipe,
  onAddFavorite,
  onSearchFavorite,
}) {
  const router = useRouter();

  function handleDeleteAndReroute() {
    if (confirm("Are you sure you want to delete this recipe?")) {
      onDeleteRecipe(recipeDetails.id);
      router.push("/");
    }
  }

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
        <StyledButtonContainer>
          <ToggleFavoriteRecipe
            recipeId={recipeDetails.id}
            onAddFavorite={onAddFavorite}
            isFavoriteFlag={onSearchFavorite(recipeDetails.id)}
          />
        </StyledButtonContainer>
        <p>⏰ {recipeDetails.preparationTime}</p>
        <ul>
          {recipeDetails.ingredients.map(
            (ingredient) =>
              ingredient.name && (
                <li key={uuidv4()}>
                  {ingredient.quantity} - {ingredient.name}
                </li>
              )
          )}
        </ul>
        <StyledDescription>{recipeDetails.description}</StyledDescription>
      </RecipeCard>
      <StyledActionElementsContainer>
        <StyledLink href="/">⬅ Back</StyledLink>
        <StyledButton type="button" onClick={() => handleDeleteAndReroute()}>
          <StyledTrashBin></StyledTrashBin>
        </StyledButton>
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
  &:hover {
    cursor: pointer;
  }
`;

const StyledActionElementsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 4.5rem;
`;

const StyledTrashBin = styled(TrashBin)`
  height: 35px;
  width: 35px;
  &:hover {
    cursor: pointer;
  }
`;
const StyledButton = styled.button`
  all: unset;
`;

const StyledButtonContainer = styled.div`
  margin: 5% 5%;
`;
