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
        <StyledNote>No favorite recipes yet</StyledNote>
      )}
    </>
  );
}

const StyledNote = styled.p`
  margin-top: 50%;
  text-align: center;
`;
