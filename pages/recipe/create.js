import { useRouter } from "next/router";
import { useState } from "react";
import { prepareFormData } from "@/utils/utils";
import CreateOrUpdateRecipeForm from "@/components/CreateOrUpdateRecipeForm";
import { v4 as uuidv4 } from "uuid";

export default function CreatePage({ onAddRecipe, recipes }) {
  const [error, setError] = useState({ visible: false, text: "" });
  const [inputValidation, setInputValidation] = useState("");
  const router = useRouter();

  const [ingredientInputs, setInputs] = useState([
    {
      id: uuidv4(),
      quantity: "",
      name: "",
    },
  ]);

  function handleAddIngredients() {
    setInputs([...ingredientInputs, { id: uuidv4(), quantity: "", name: "" }]);
  }
  function handleDeleteIngredients(id) {
    setInputs(ingredientInputs.filter((input) => input.id !== id));
  }

  function handleOnInputChange(ingredientId, field, value) {
    setInputs((prevInputs) => {
      const updatedInputs = prevInputs.map((ingredient) => {
        if (ingredient.id === ingredientId) {
          if (field.startsWith("ingredient-")) {
            return { ...ingredient, name: value };
          }
          if (field.startsWith("amount-")) {
            return { ...ingredient, quantity: value };
          }
        }
        return ingredient;
      });

      const foundIngredient = updatedInputs.find(
        (ingredient) => ingredient.id === ingredientId
      );

      if (!foundIngredient) {
        updatedInputs.push({
          id: ingredientId,
          quantity: field.startsWith("amount-") ? value : "",
          name: field.startsWith("ingredient-") ? value : "",
        });
      }

      return updatedInputs;
    });
  }

  function handleResetError() {
    setError({ ...error, visible: false });
  }

  async function handleSubmit(event) {
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

    if (formData.get("file").size > 0) {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const cloudinaryImgURL = await response.json();
      preparedNewRecipeData.imageURL = cloudinaryImgURL.url;
      preparedNewRecipeData.imageId = cloudinaryImgURL.id;
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
        onHandleAddIngredients={handleAddIngredients}
        onHandleDeleteIngrendients={handleDeleteIngredients}
        ingredientInputs={ingredientInputs}
        onHandleInputChange={handleOnInputChange}
        onResetError={handleResetError}
      />
    </>
  );
}
