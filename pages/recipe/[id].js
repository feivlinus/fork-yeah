import { useRouter } from "next/router";
import RecipeDetails from "@/components/RecipeDetails.js";

export default function RecipeDetailsPage({
  recipes,
  onDeleteRecipe,
  onAddFavorite,
  onSearchFavorite,
}) {
  const router = useRouter();
  const { id } = router.query;

  const recipeDetails = recipes.find((recipe) => recipe.id === id);
  if (recipeDetails) {
    return (
      <RecipeDetails
        recipeDetails={recipeDetails}
        onDeleteRecipe={onDeleteRecipe}
        onAddFavorite={onAddFavorite}
        onSearchFavorite={onSearchFavorite}
      />
    );
  }
}
