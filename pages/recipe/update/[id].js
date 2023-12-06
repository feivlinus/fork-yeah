import { useRouter } from "next/router";
import { useState } from "react";
import { prepareFormData } from "@/utils/utils";
import CreateOrUpdateRecipeForm from "@/components/CreateOrUpdateRecipeForm";

export default function UpdateRecipeDetails({ recipes, onUpdateRecipe }) {
  const [error, setError] = useState("");
  const [inputValidation, setInputValidation] = useState("");
  const [image, setImage] = useState();
  const [toDelete, setToDelete] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const recipeDetails = recipes.find((recipe) => recipe.id === id);

  if (recipeDetails?.imageURL && (image === null || undefined)) {
    setImage({ id: recipeDetails.imageURL, toDelete: false });
  }

  function handleToDelete() {
    setToDelete(!toDelete);
  }

  async function handleUpdateSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    let response = "";
    //Image upload fetch if new image is in form
    if (formData.get("file").size > 0) {
      response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
    }
    //Delete old image from cloudinary when image got removed and no file was selected
    else if (
      formData.get("file").size === 0 &&
      recipeDetails.imageId &&
      toDelete
    ) {
      response = await fetch("/api/upload/delete", {
        method: "POST",
        body: recipeDetails.imageId,
      });
    }

    const newRecipeData = Object.fromEntries(formData);
    const preparedNewRecipeData = await prepareFormData(newRecipeData, id);

    //When there is a file upload
    if (response !== "") {
      const cloudinaryImgURL = await response.json();
      preparedNewRecipeData.imageURL = cloudinaryImgURL.url;
      preparedNewRecipeData.imageId = cloudinaryImgURL.imageId;
    }

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
        onHandleDelete={handleToDelete}
      />
    );
  }
}
