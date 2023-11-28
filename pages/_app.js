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

  function handleDeleteRecipe(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  function handleUpdateRecipe(updatedRecipe, id) {
    setRecipes(recipes.filter((recipe) => recipe.id === id));

    console.log("test : ", id);
    console.log("test : ", updatedRecipe);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onAddRecipe={handleAddRecipe}
        onDeleteRecipe={handleDeleteRecipe}
        onUpdateRecipe={handleUpdateRecipe}
        recipes={recipes}
      />
    </>
  );
}
