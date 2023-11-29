import { useRouter } from "next/router";
import { useState } from "react";
import CreateOrUpdateRecipeForm from "@/components/CreateOrUpdateRecipeForm";

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
    const preparedNewRecipeData = prepareFormData(newRecipeData);

    setInputValidation("valid");

    onUpdateRecipe(preparedNewRecipeData, id);
    router.push("/");
  }

  function prepareFormData(formData) {
    const preparedNewRecipeData = {
      id: id,
      name: formData.title,
      preparationTime: formData.duration,
      imageURL: formData.imgurl,
      description: formData.description,
      ingredients: [
        { quantity: formData.amount1, name: formData.ingredient1 },
        { quantity: formData.amount2, name: formData.ingredient2 },
        { quantity: formData.amount3, name: formData.ingredient3 },
        { quantity: formData.amount4, name: formData.ingredient4 },
      ],
    };
    return preparedNewRecipeData;
  }

  if (recipeDetails) {
    return (
      <>
        <CreateOrUpdateRecipeForm
          recipeDetails={recipeDetails}
          onSubmit={handleUpdateSubmit}
          errorMessage={error}
          inputValidation={inputValidation}
        />
      </>
    );
  }
}
