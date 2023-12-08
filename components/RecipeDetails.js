import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import TrashBin from "public/svg/TrashBin.svg";
import EditPen from "public/svg/EditPen.svg";
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
    <main>
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

        <StyledIngredientTable>
          <tbody>
            {recipeDetails.ingredients.map(
              (ingredient) =>
                ingredient.name && (
                  <tr key={uuidv4()}>
                    <td className="text-right">{ingredient.quantity}</td>
                    <td className="text-left">{ingredient.name}</td>
                  </tr>
                )
            )}
          </tbody>
        </StyledIngredientTable>

        <StyledDescription>{recipeDetails.description}</StyledDescription>
      </RecipeCard>
      <StyledActionElementsContainer>
        <StyledBackLink href="/">⬅</StyledBackLink>

        <StyledButton type="button" onClick={() => handleDeleteAndReroute()}>
          <StyledTrashBin></StyledTrashBin>
        </StyledButton>

        <StyledEditLink href={`update/${recipeDetails.id}`}>
          <StyledEditPen />
        </StyledEditLink>
      </StyledActionElementsContainer>
    </main>
  );
}

const RecipeCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: var(--dark);
`;

const StyledImage = styled(Image)`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;
`;

const StyledIngredientTable = styled.table`
  padding: 1rem;
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }

  border-collapse: collapse;

  td {
    padding: 4px 8px;
    /* border-radius: 0.5rem; */
  }

  tr {
    border: none;
  }

  tbody {
    display: table-row-group;
    vertical-align: middle;
  }
  td:nth-child(even) {
    border-radius: 0 0.5rem 0.5rem 0;
  }
  td:nth-child(odd) {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  tbody tr:nth-child(odd) {
    background-color: var(--secondary-darker);
  }
`;

const StyledDescription = styled.p`
  margin: 1rem;
`;

const StyledBackLink = styled(Link)`
  all: unset;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  border: 2px solid var(--dark-secondary);
  color: var(--dark-secondary);
  font-size: 1rem;
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
  }
  background-position: center;
  transition: background 0.5s, color 0.5s;

  &:active {
    color: var(--secondary);
    background-color: var(--dark-secondary);
    background-size: 100%;
    transition: background 0s;
  }
`;

const StyledActionElementsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 1rem;
  margin-bottom: 4.5rem;
`;

const StyledTrashBin = styled(TrashBin)`
  height: 35px;
  width: auto;
  &:hover {
    cursor: pointer;
  }
  fill: var(--dark-secondary);
`;

const StyledButton = styled.button`
  all: unset;
`;

const StyledEditLink = styled(Link)`
  all: unset;
  top: 8px;
  right: 8px;
`;

const StyledEditPen = styled(EditPen)`
  height: 35px;
  width: 35px;
  &:hover {
    cursor: pointer;
  }
  fill: var(--dark-secondary);
`;

const StyledButtonContainer = styled.div`
  margin: 1rem 1rem;
`;
