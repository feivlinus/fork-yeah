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
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleAddRecipe={handleAddRecipe}
        recipes={recipes}
      />
    </>
  );
}
