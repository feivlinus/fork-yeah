import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import data from "@/db/data";

export default function App({ Component, pageProps }) {
  const [storedRecipes, setRecipe] = useLocalStorageState("recipes", {
    defaultValue: [...data],
  });

  async function handleAddRecipe(newData) {
    await setRecipe([...storedRecipes, newData]);
  }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleAddRecipe={handleAddRecipe}
        storedRecipes={storedRecipes}
      />
    </>
  );
}
