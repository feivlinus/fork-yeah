import data from "@/db/data";
import { useRouter } from "next/router";
import RecipeDetails from "@/components/RecipeDetails.js";

export default function RecipeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  //Remember to remove the toString() because at the database there will be ids as strings
  const recipeData = data.find((recipe) => recipe.id.toString() === id);

  if (recipeData) {
    return <RecipeDetails recipeData={recipeData} />;
  }
}
