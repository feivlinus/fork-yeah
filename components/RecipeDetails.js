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
        <StyledLink href="/">⬅ Back</StyledLink>

        <StyledButton type="button" onClick={() => handleDeleteAndReroute()}>
          <StyledTrashBin></StyledTrashBin>
        </StyledButton>

        <StyledEditLink href={`update/${recipeDetails.id}`}>
          <StyledEditPen></StyledEditPen>
        </StyledEditLink>
      </StyledActionElementsContainer>
    </>
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
`;

const StyledIngredientTable = styled.table`
  padding: 5%;
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }

  td {
    box-sizing: border-box;
    min-height: 48px;
    padding: 4px 8px;
    vertical-align: top;
  }

  tbody {
    display: table-row-group;
    vertical-align: middle;
  }
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

const StyledEditLink = styled(Link)`
  all: unset;
  top: 8px;
  right: 8px;
`;

const StyledEditPen = styled(EditPen)`
  height: 32px;
  width: 35px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledButtonContainer = styled.div`
  margin: 5% 5%;
`;
