import { useRouter } from "next/router";
import RecipeDetails from "@/components/RecipeDetails.js";

export default function RecipeDetailsPage({ recipes }) {
  const router = useRouter();
  const { id } = router.query;

  //Remember to remove the toString() because at the database there will be ids as strings
  const recipeDetails = recipes.find((recipe) => recipe.id === id);
  if (recipeDetails) {
    return <RecipeDetails recipeDetails={recipeDetails} />;
  }
}
