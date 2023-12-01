import RecipeList from "@/components/RecipeList";
import styled from "styled-components";

export default function favoritesPage({
  recipes,
  onAddFavorite,
  onSearchFavorite,
}) {
  const favoriteRecipes = recipes.filter(
    (recipe) => onSearchFavorite(recipe.id) === true
  );

  return (
    <>
      <h1>Favorites</h1>
      {favoriteRecipes.length > 0 ? (
        <RecipeList
          recipes={favoriteRecipes}
          onAddFavorite={onAddFavorite}
          onSearchFavorite={onSearchFavorite}
        />
      ) : (
        <StyledNoteContainer>
          <StyledCard>
            <p>No favorite recipes yet</p>
          </StyledCard>
        </StyledNoteContainer>
      )}
    </>
  );
}

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 25rem;
`;

const StyledNoteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
