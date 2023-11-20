import styled from "styled-components";

export default function CreatePage() {
  return (
    <>
      <h1>Create new Recipe</h1>
      <StyledForm>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="duration">Cooking duration:</label>
        <input type="text" id="duration" name="duration" />

        <label htmlFor="img-url">Image Url</label>
        <input type="url" id="img-url" name="img-url" />

        <StyledFieldSet>
          <legend>Ingredients:</legend>
          <input type="text" name="amount-1" placeholder="Amount" />
          <input type="text" name="ingredient-1" placeholder="Ingredient" />
          <input type="text" name="amount-2" placeholder="Amount" />
          <input type="text" name="ingredient-2" placeholder="Ingredient" />
          <input type="text" name="amount-3" placeholder="Amount" />
          <input type="text" name="ingredient-3" placeholder="Ingredient" />
          <input type="text" name="amount-4" placeholder="Amount" />
          <input type="text" name="ingredient-4" placeholder="Ingredient" />
        </StyledFieldSet>

        <label htmlFor="description">Description:</label>
        <textarea name="description" rows="5" />

        <button type="submit">Add recipe</button>
        <button>Cancel</button>
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
