import CreateOrUpdateRecipeForm from "@/components/CreateOrUpdateRecipeForm";
import { useState } from "react";
import { useRouter } from "next/router";
import { prepareFormData } from "@/utils/utils";

export default function CreatePage({ onAddRecipe, recipes }) {
  const [error, setError] = useState({ visible: false, text: "" });
  const [inputValidation, setInputValidation] = useState("");
  const router = useRouter();

  function handleResetError() {
    setError({ ...error, visible: false });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newRecipeData = Object.fromEntries(formData);
    const preparedNewRecipeData = prepareFormData(newRecipeData);

    if (recipes.find((recipe) => recipe.name === preparedNewRecipeData.name)) {
      const errorString = `"${preparedNewRecipeData.name}" is allready in use. Use another title please.`;
      setError({ visible: true, text: errorString });
      setTimeout(handleResetError, 5000);
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
        onResetError={handleResetError}
      />
    </>
  );
}
