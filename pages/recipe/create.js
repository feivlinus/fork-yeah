import { useRouter } from "next/router";
import styled from "styled-components";
import { v4 as uuidv4, v4 } from "uuid";

export default function CreatePage({ handleAddRecipe }) {
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newRecipeData = Object.fromEntries(formData);

    const preparedNewRecipeData = prepareFormData(newRecipeData);

    //Validate preparedNewRecipeData

    //Store preparedNewRecipeData
    handleAddRecipe(preparedNewRecipeData).then(router.push("/"));
  }

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
      <h1>Create new Recipe</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required maxLength={75} />

        <label htmlFor="duration">Cooking duration:</label>
        <input type="text" id="duration" name="duration" />

        <label htmlFor="imgurl">Image Url</label>
        <input type="url" id="imgurl" name="imgurl" />

        <StyledFieldSet>
          <legend>Ingredients:</legend>
          <input type="text" name="amount1" placeholder="Amount" />
          <input type="text" name="ingredient1" placeholder="Ingredient" />
          <input type="text" name="amount2" placeholder="Amount" />
          <input type="text" name="ingredient2" placeholder="Ingredient" />
          <input type="text" name="amount3" placeholder="Amount" />
          <input type="text" name="ingredient3" placeholder="Ingredient" />
          <input type="text" name="amount4" placeholder="Amount" />
          <input type="text" name="ingredient4" placeholder="Ingredient" />
        </StyledFieldSet>

        <label htmlFor="description">Description:</label>
        <textarea name="description" rows="5" />

        <button type="submit">Add recipe</button>
        <button onClick={() => router.push("/")}>Cancel</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill, 75vw);
  justify-content: center;
  gap: 2vh 2vw;
`;

const StyledFieldSet = styled.fieldset`
  all: unset;
  display: grid;
  grid-template-columns: 20% 79%;
  gap: 2vh 1vw;
  legend {
    margin-bottom: 2.5%;
  }
`;
