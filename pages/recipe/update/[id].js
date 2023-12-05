import { useRouter } from "next/router";
import { useState } from "react";
import CreateOrUpdateRecipeForm from "@/components/CreateOrUpdateRecipeForm";
import { prepareFormData } from "@/utils/utils";

export default function UpdateRecipeDetails({ recipes, onUpdateRecipe }) {
  const [error, setError] = useState("");
  const [inputValidation, setInputValidation] = useState("");
  const [image, setImage] = useState();
  const router = useRouter();
  const { id } = router.query;

  const recipeDetails = recipes.find((recipe) => recipe.id === id);

  if (recipeDetails && !image.id) {
    setImage({ id: recipeDetails.imageURL });
  }

  async function handleUpdateSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // console.log(...formData);
    console.log(image);
    console.log(recipeDetails.imageURL);
    // const response = await fetch("/api/upload", {
    //   method: "POST",
    //   body: formData,
    // });
    const response = await fetch("/api/upload/delete", {
      method: "POST",
      body: image.id,
    });
    // const cloudinaryImgURL = await response.json();

    // const newRecipeData = Object.fromEntries(formData);
    // const preparedNewRecipeData = await prepareFormData(newRecipeData, id);
    // preparedNewRecipeData.imageURL = cloudinaryImgURL;

    setInputValidation("valid");
    // onUpdateRecipe(preparedNewRecipeData, id);
    // router.push(`/recipe/${id}`);
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
