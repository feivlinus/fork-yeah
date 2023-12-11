import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import TrashBin from "public/svg/TrashBin.svg";

export default function CreateOrUpdateRecipeForm({
  errorMessage,
  inputValidation,
  recipeDetails = {},
  onSubmit,
  onHandleDelete,
  image,
}) {
  const isCreateNewRecipe = Object.keys(recipeDetails).length === 0;
  const formTitle = isCreateNewRecipe ? "Create new recipe" : "Update Recipe";
  const formButtonTitle = isCreateNewRecipe ? "Add Recipe" : "Save Changes";
  const abortLinkUrl = isCreateNewRecipe ? "/" : `/recipe/${recipeDetails.id}`;

  const [hasImage, setHasImage] = useState(
    recipeDetails.imageURL ? true : false
  );
  const [imagePreviewSrc, setImagePreviewSrc] = useState({ src: "" });
  const inputFile = useRef(null);

  function handleImageDelete(event) {
    event.preventDefault();
    setHasImage(false);
    setImagePreviewSrc({ src: "" });
    if (hasImage) {
      onHandleDelete;
    }

    if (inputFile.current) {
      inputFile.current.value = "";
      inputFile.current.type = "text";
      inputFile.current.type = "file";
    }
  }

  function handleImageChange(event) {
    setHasImage(true);
    if (event.target.files && event.target.files[0]) {
      setImagePreviewSrc({ src: URL.createObjectURL(event.target.files[0]) });
    }
  }

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

          <label htmlFor="file">Image</label>
          {(hasImage || imagePreviewSrc.src) && (
            <StyledImageContainer>
              <div>
                <StyledImage
                  src={imagePreviewSrc.src || recipeDetails.imageURL}
                  alt={recipeDetails.name || "new Image"}
                  width={300}
                  height={300}
                />
                <StyledTrasBin onClick={handleImageDelete} />
              </div>
            </StyledImageContainer>
          )}
          <input
            type="file"
            id="file"
            name="file"
            accept="image/jpeg, image/png, image/jpg, image/gif"
            ref={inputFile}
            onChange={handleImageChange}
            style={{ display: hasImage ? "none" : "block" }}
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

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  div {
    max-width: 100%;
    height: auto;
    position: relative;
  }
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
`;

const StyledTrasBin = styled(TrashBin)`
  width: 3rem;
  height: 3rem;
  fill: black;
  position: absolute;
  top: 2.5%;
  right: 2.5%;
  z-index: 50;
  background-color: white;
  border-radius: 45%;
  border: solid black 2px;
  padding: 4px 4px;
`;
