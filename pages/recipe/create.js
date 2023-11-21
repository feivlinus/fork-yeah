import { v4 as uuidv4, v4 } from "uuid";
import { CreateRecipeForm } from "@/components/CreateRecipeForm";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CreatePage({ handleAddRecipe, storedRecipes }) {
  const [error, setError] = useState("");
  const [inputValidation, setInputValidation] = useState("");
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newRecipeData = Object.fromEntries(formData);
    const preparedNewRecipeData = prepareFormData(newRecipeData);

    //Validate preparedNewRecipeData (only title so far)
    if (
      storedRecipes.find((recipe) => recipe.name === preparedNewRecipeData.name)
    ) {
      setError(
        `"${preparedNewRecipeData.name}" is allready in use. Use another title please.`
      );
      setInputValidation("already-created");
      return;
    } else {
      setInputValidation("valid");
    }

    // Store preparedNewRecipeData
    handleAddRecipe(preparedNewRecipeData);
    router.push("/");
  }

  /*
    Prepares the form data to suit the data schema.
    Ingredients and their amounts are not linked inside the form.
    With this function they get linked to together as objects.
  */
  function prepareFormData(formData) {
    const preparedNewRecipeData = {
      id: uuidv4(),
      name: formData.title,
      preparationTime: formData.duration,
      imageURL: formData.imgurl,
      description: formData.description,
      ingredients: [
        { quantity: formData.amount1, ingredient: formData.ingredient1 },
        { quantity: formData.amount2, ingredient: formData.ingredient2 },
        { quantity: formData.amount3, ingredient: formData.ingredient3 },
        { quantity: formData.amount4, ingredient: formData.ingredient4 },
      ],
    };
    return preparedNewRecipeData;
  }

  return (
    <>
      <CreateRecipeForm
        onHandleSubmit={handleSubmit}
        errorMessage={error}
        inputValidation={inputValidation}
      />
    </>
  );
}
