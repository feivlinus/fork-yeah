import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function UpdateRecipeForm({
  errorMessage,
  inputValidation,
  recipeDetails,
  onUpdateRecipe,
}) {
  const router = useRouter();
  console.log(recipeDetails);
  return (
    <>
      <h1>Update Recipe</h1>

      {errorMessage ? (
        <StyledErrorMessageContainer>
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        </StyledErrorMessageContainer>
      ) : (
        ""
      )}
      <StyledForm onSubmit={onUpdateRecipe}>
        <label htmlFor="title">Title:</label>
        <StyledTitleInput
          type="text"
          id="title"
          name="title"
          required
          maxLength={75}
          autoFocus
          $titleInput={inputValidation}
          defaultValue={recipeDetails.name ?? ""}
        />

        <label htmlFor="duration">Cooking duration:</label>
        <input
          type="text"
          id="duration"
          name="duration"
          defaultValue={recipeDetails.preparationTime ?? ""}
        />

        <label htmlFor="imgurl">Image Url</label>
        <input
          type="url"
          id="imgurl"
          name="imgurl"
          defaultValue={recipeDetails.imageURL ?? ""}
        />

        <StyledFieldSet>
          <legend>Ingredients:</legend>
          <input
            type="text"
            name="amount1"
            placeholder="Amount"
            required
            defaultValue={recipeDetails.ingredients[0].quantity ?? ""}
          />
          <input
            type="text"
            name="ingredient1"
            placeholder="Ingredient"
            required
            defaultValue={recipeDetails.ingredients[0].name ?? ""}
          />
          <input
            type="text"
            name="amount2"
            placeholder="Amount"
            defaultValue={recipeDetails.ingredients[1].quantity ?? ""}
          />
          <input
            type="text"
            name="ingredient2"
            placeholder="Ingredient"
            defaultValue={recipeDetails.ingredients[1].name ?? ""}
          />

          <input
            type="text"
            name="amount3"
            placeholder="Amount"
            defaultValue={recipeDetails.ingredients[2].quantity ?? ""}
          />
          <input
            type="text"
            name="ingredient3"
            placeholder="Ingredient"
            defaultValue={recipeDetails.ingredients[2].name ?? ""}
          />

          <input
            type="text"
            name="amount4"
            placeholder="Amount"
            defaultValue={recipeDetails.ingredients[3].quantity ?? ""}
          />
          <input
            type="text"
            name="ingredient4"
            placeholder="Ingredient"
            defaultValue={recipeDetails.ingredients[3].name ?? ""}
          />
        </StyledFieldSet>

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          rows="5"
          defaultValue={recipeDetails.description ?? ""}
        />

        <button type="submit">Save Changes</button>
      </StyledForm>
      <StyledLinkContainer>
        <StyledLink href="/">Cancel</StyledLink>
      </StyledLinkContainer>
    </>
  );
}

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill, 75vw);
  justify-content: center;
  gap: 2vh 2vw;
`;

const StyledTitleInput = styled.input`
  border: ${({ $titleInput }) =>
    $titleInput === "already-created"
      ? "2px solid red"
      : $titleInput === "valid"
      ? "2px solid green"
      : ""};
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

const StyledErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledErrorMessage = styled.span`
  background-color: red;
  border-radius: 1rem;
  margin: 5%;
  padding: 2.5%;
  color: #fff;
  width: 75vw;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StyledLinkContainer = styled.div`
  display: flex;
  margin-top: 5%;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  appearance: auto;
  text-rendering: auto;
  color: buttontext;

  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  box-sizing: border-box;
  background-color: buttonface;
  margin: 0em;
  padding-block: 1px;
  padding-inline: 6px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonborder;
  border-image: initial;
`;
