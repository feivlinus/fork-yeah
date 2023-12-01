import CreateOrUpdateRecipeForm from "@/components/CreateOrUpdateRecipeForm";
import { useState } from "react";
import { useRouter } from "next/router";
import { prepareFormData } from "@/utils/utils";

export default function CreatePage({ onAddRecipe, recipes }) {
  const [error, setError] = useState("");
  const [inputValidation, setInputValidation] = useState("");
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const cloudinaryImgURL = await response.json();

    const newRecipeData = Object.fromEntries(formData);

    const preparedNewRecipeData = await prepareFormData(newRecipeData);
    preparedNewRecipeData.imageURL = cloudinaryImgURL;

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
