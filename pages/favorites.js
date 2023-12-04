import RecipeList from "@/components/RecipeList";
import styled from "styled-components";

export default function FavoritesPage({
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
          <p>No favorite recipes yet</p>
        </StyledNoteContainer>
      )}
    </>
  );
}

const StyledNoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;

  p {
    text-align: center;
    font-size: 1.5rem;
  }
`;
