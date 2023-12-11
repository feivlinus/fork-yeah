import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { prepareFormData } from "@/utils/utils";
import CreateOrUpdateRecipeForm from "@/components/CreateOrUpdateRecipeForm";
import { v4 as uuidv4 } from "uuid";

export default function UpdateRecipeDetails({ recipes, onUpdateRecipe }) {
  const [error, setError] = useState("");
  const [inputValidation, setInputValidation] = useState("");
  const [image, setImage] = useState();
  const [toDelete, setToDelete] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const recipeDetails = recipes.find((recipe) => recipe.id === id);

  const [ingredientInputs, setInputs] = useState([]);

  function handleAddIngredients() {
    setInputs([...ingredientInputs, { id: uuidv4(), quantity: "", name: "" }]);
  }
  function handleDeleteIngredients(id) {
    setInputs(ingredientInputs.filter((input) => input.id !== id));
  }

  useEffect(() => {
    if (recipeDetails) {
      setInputs(recipeDetails.ingredients.map((ingredient) => ingredient));
    }
  }, [recipeDetails]);

  if (!router.isReady || !recipeDetails) {
    // You can render a loading state or redirect here
    return <div>Loading...</div>;
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
      preparedNewRecipeData.name !== recipeDetails.name &&
      recipes.find((recipe) => recipe.name === preparedNewRecipeData.name)
    ) {
      const errorString = `"${preparedNewRecipeData.name}" is allready in use. Use another title please.`;
      setError(errorString);
      setInputValidation("already-created");
      return;
    }

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

    //When there is a file upload
    if (response) {
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
        onHandleAddIngredients={handleAddIngredients}
        onHandleDeleteIngrendients={handleDeleteIngredients}
        ingredientInputs={ingredientInputs}
      />
    );
  }
}
