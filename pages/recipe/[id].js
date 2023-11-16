import data from "@/db/data";
import { useRouter } from "next/router";
import RecipeDetails from "@/components/RecipeDetails.js";

export default function RecipeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const recipeData = data[id];
  console.log(recipeData);
  if (recipeData) {
    return <RecipeDetails recipeData={recipeData} />;
  }
}
