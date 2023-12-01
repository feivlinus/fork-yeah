import { useRouter } from "next/router";
import { useState } from "react";
import CreateOrUpdateRecipeForm from "@/components/CreateOrUpdateRecipeForm";
import { prepareFormData } from "@/utils/utils";

export default function UpdateRecipeDetails({ recipes, onUpdateRecipe }) {
  const [error, setError] = useState("");
  const [inputValidation, setInputValidation] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const recipeDetails = recipes.find((recipe) => recipe.id === id);

  function handleUpdateSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newRecipeData = Object.fromEntries(formData);
    const preparedNewRecipeData = prepareFormData(newRecipeData, id);

    setInputValidation("valid");
    onUpdateRecipe(preparedNewRecipeData, id);
    router.push(`/recipe/${id}`);
  }

  if (recipeDetails) {
    return (
      <CreateOrUpdateRecipeForm
        recipeDetails={recipeDetails}
        onSubmit={handleUpdateSubmit}
        errorMessage={error}
        inputValidation={inputValidation}
      />
    );
  }
}
