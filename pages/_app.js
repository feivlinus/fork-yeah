import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import data from "@/db/data";

export default function App({ Component, pageProps }) {
  const [recipes, setRecipes] = useLocalStorageState("recipes", {
    defaultValue: data,
  });

  function handleAddRecipe(newData) {
    setRecipes([...recipes, newData]);
  }

<<<<<<< HEAD
  const [favoritesList, setFavoriteList] = useLocalStorageState("favorites", {
    defaultValue: [],
  });

  function handleSearchFavorite(recipeId) {
    return favoritesList.includes(recipeId);
  }

  function handleAddFavorite(recipeId) {
    if (favoritesList.find((entry) => entry == recipeId)) {
      setFavoriteList(favoritesList.filter((entry) => entry != recipeId));
      return;
    }
    setFavoriteList([...favoritesList, recipeId]);
  }

=======
  function handleDeleteRecipe(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }
>>>>>>> main
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onAddRecipe={handleAddRecipe}
        onDeleteRecipe={handleDeleteRecipe}
        recipes={recipes}
        onAddFavorite={handleAddFavorite}
        onSearchFavorite={handleSearchFavorite}
      />
    </>
  );
}
