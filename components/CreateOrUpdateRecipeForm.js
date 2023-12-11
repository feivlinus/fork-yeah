import styled from "styled-components";
import Link from "next/link";

export default function CreateOrUpdateRecipeForm({
  errorMessage,
  inputValidation,
  recipeDetails = {},
  onSubmit,
}) {
  const isCreateNewRecipe = Object.keys(recipeDetails).length === 0;
  const formTitle = isCreateNewRecipe ? "Create new recipe" : "Update Recipe";
  const formButtonTitle = isCreateNewRecipe ? "Add Recipe" : "Save Changes";
  const abortLinkUrl = isCreateNewRecipe ? "/" : `/recipe/${recipeDetails.id}`;

  return (
    <>
      <StyledTitle>{formTitle}</StyledTitle>

      <StyledErrorMessage $isVisible={errorMessage.visible}>
        {errorMessage.text} &nbsp;
      </StyledErrorMessage>

      <StyledMainContainer>
        <StyledForm onSubmit={onSubmit}>
          <label htmlFor="title">Title:</label>
          <StyledTitleInput
            type="text"
            id="title"
            name="title"
            required
            maxLength={75}
            autoFocus
            defaultValue={recipeDetails.name}
            $isVisible={errorMessage.visible}
          />

          <label htmlFor="duration">Cooking duration:</label>
          <input
            type="text"
            id="duration"
            name="duration"
            defaultValue={recipeDetails.preparationTime}
          />

          <label htmlFor="imgurl">Image Url</label>

          <input
            type="url"
            id="imgurl"
            name="imgurl"
            defaultValue={recipeDetails.imageURL}
          />

          <StyledFieldSet>
            <legend>Ingredients:</legend>
            <input
              type="text"
              name="amount1"
              placeholder="Amount"
              required
              defaultValue={
                recipeDetails.ingredients &&
                recipeDetails.ingredients.length > 0
                  ? recipeDetails.ingredients[0].quantity
                  : ""
              }
            />
            <input
              type="text"
              name="ingredient1"
              placeholder="Ingredient"
              required
              defaultValue={
                recipeDetails.ingredients &&
                recipeDetails.ingredients.length > 0
                  ? recipeDetails.ingredients[0].name
                  : ""
              }
            />
            <input
              type="text"
              name="amount2"
              placeholder="Amount"
              defaultValue={
                recipeDetails.ingredients &&
                recipeDetails.ingredients.length > 0
                  ? recipeDetails.ingredients[1].quantity
                  : ""
              }
            />
            <input
              type="text"
              name="ingredient2"
              placeholder="Ingredient"
              defaultValue={
                recipeDetails.ingredients &&
                recipeDetails.ingredients.length > 0
                  ? recipeDetails.ingredients[1].name
                  : ""
              }
            />

            <input
              type="text"
              name="amount3"
              placeholder="Amount"
              defaultValue={
                recipeDetails.ingredients &&
                recipeDetails.ingredients.length > 0
                  ? recipeDetails.ingredients[2].quantity
                  : ""
              }
            />
            <input
              type="text"
              name="ingredient3"
              placeholder="Ingredient"
              defaultValue={
                recipeDetails.ingredients &&
                recipeDetails.ingredients.length > 0
                  ? recipeDetails.ingredients[2].name
                  : ""
              }
            />

            <input
              type="text"
              name="amount4"
              placeholder="Amount"
              defaultValue={
                recipeDetails.ingredients &&
                recipeDetails.ingredients.length > 0
                  ? recipeDetails.ingredients[3].quantity
                  : ""
              }
            />
            <input
              type="text"
              name="ingredient4"
              placeholder="Ingredient"
              defaultValue={
                recipeDetails.ingredients &&
                recipeDetails.ingredients.length > 0
                  ? recipeDetails.ingredients[3].name
                  : ""
              }
            />
          </StyledFieldSet>

          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            rows="5"
            cols="50"
            maxLength="3000"
            defaultValue={recipeDetails.description}
          />
          <StyledLinkContainer>
            <StyledSubmitButton type="submit">
              {formButtonTitle}
            </StyledSubmitButton>
            <StyledCancelLink href={abortLinkUrl}>Cancel</StyledCancelLink>
          </StyledLinkContainer>
        </StyledForm>
      </StyledMainContainer>
    </>
  );
}

const StyledMainContainer = styled.main`
  margin-bottom: 4.5rem;
  margin-top: 2rem;
`;

const StyledTitle = styled.h1`
  margin-top: 6rem;
  text-align: center;
  color: var(--dark);
`;

const StyledTitleInput = styled.input`
  border: ${({ $isVisible }) =>
    $isVisible ? "2px solid red" : "2px solid green"};
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill, 75vw);
  justify-content: center;
  gap: 2vh 2vw;
  color: var(--dark);

  input,
  textarea {
    background-color: var(--secondary);
    border-radius: 0.5rem;
    border: 1px solid var(--dark);
    padding: 0.25rem 0.25rem;
  }
  input,
  textarea,
  ::placeholder {
    color: var(--dark);
    font-family: "Open Sans";
    font-size: 1rem;
  }
  textarea {
    resize: none;
  }
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

const StyledErrorMessage = styled.span`
  background-color: var(--primary);
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
  color: var(--secondary);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom: 100px;
  right: ${({ $isVisible }) => ($isVisible ? "0px" : "-500px")};
  transition: right 0.5s;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5%;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledCancelLink = styled(Link)`
  all: unset;
  width: 8rem;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  border: 2px solid var(--dark-secondary);
  color: var(--dark-secondary);
  font-size: 1rem;
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
  }
  background-position: center;
  transition: background 0.5s, color 0.5s;

  &:active {
    color: var(--secondary);
    background-color: var(--dark-secondary);
    background-size: 100%;
    transition: background 0s;
  }
`;

const StyledSubmitButton = styled.button`
  all: unset;
  width: 8rem;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  border: 2px solid var(--dark-secondary);
  color: var(--dark-secondary);
  font-size: 1rem;
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
  }
  background-position: center;
  transition: background 0.5s, color 0.5s;

  &:active {
    color: var(--secondary);
    background-color: var(--dark-secondary);
    background-size: 100%;
    transition: background 0s;
  }
`;
