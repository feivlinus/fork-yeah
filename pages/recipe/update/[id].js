import { useRouter } from "next/router";
import { useState } from "react";
import { prepareFormData } from "@/utils/utils";
import CreateOrUpdateRecipeForm from "@/components/CreateOrUpdateRecipeForm";

export default function UpdateRecipeDetails({ recipes, onUpdateRecipe }) {
  const [error, setError] = useState({ visible: false, text: "" });
  const [inputValidation, setInputValidation] = useState("");
  const [image, setImage] = useState();
  const [toDelete, setToDelete] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const recipeDetails = recipes.find((recipe) => recipe.id === id);

  function handleResetError() {
    setError({ ...error, visible: false });
  }

  if (recipeDetails?.imageURL && (image === null || image === undefined)) {
    setImage({ id: recipeDetails.imageURL, toDelete: false });
  }

  function handleToDelete() {
    setToDelete(!toDelete);
  }

  async function handleUpdateSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newRecipeData = Object.fromEntries(formData);
    const preparedNewRecipeData = prepareFormData(newRecipeData, id);

    if (
      recipes.find((recipe) => recipe.name === preparedNewRecipeData.name) &&
      recipeDetails.name !== preparedNewRecipeData.name
    ) {
      const errorString = `"${preparedNewRecipeData.name}" is allready in use. Use another title please.`;
      setError({ visible: true, text: errorString });
      setTimeout(handleResetError, 5000);
      setInputValidation("already-created");
      return;
    } else {
      setInputValidation("valid");
    }

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
        onResetError={handleResetError}
        onHandleDelete={handleToDelete}
      />
    );
  }
}
