import { v4 as uuidv4, v4 } from "uuid";
import CreateOrUpdateRecipeForm from "@/components/CreateOrUpdateRecipeForm";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CreatePage({ onAddRecipe, recipes }) {
  const [error, setError] = useState("");
  const [inputValidation, setInputValidation] = useState("");
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newRecipeData = Object.fromEntries(formData);
    const preparedNewRecipeData = prepareFormData(newRecipeData);

    if (recipes.find((recipe) => recipe.name === preparedNewRecipeData.name)) {
      const errorString = `"${preparedNewRecipeData.name}" is allready in use. Use another title please.`;
      setError(errorString);
      setInputValidation("already-created");
      return;
    } else {
      setInputValidation("valid");
    }

    onAddRecipe(preparedNewRecipeData);
    router.push("/");
  }

  function prepareFormData(formData) {
    const preparedNewRecipeData = {
      id: uuidv4(),
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

  return (
    <>
      <CreateOrUpdateRecipeForm
        onSubmit={handleSubmit}
        errorMessage={error}
        inputValidation={inputValidation}
      />
    </>
  );
}
