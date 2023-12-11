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
  ingredientInputs,
  onHandleAddIngredients,
  onHandleDeleteIngrendients,
  onHandleInputChange,
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
      <h1>{formTitle}</h1>

      {errorMessage && (
        <StyledErrorMessageContainer>
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        </StyledErrorMessageContainer>
      )}
      <main>
        <StyledForm onSubmit={onSubmit}>
          <label htmlFor="title">Title:</label>
          <StyledTitleInput
            type="text"
            id="title"
            name="title"
            required
            maxLength={75}
            autoFocus
            $titleInput={inputValidation}
            defaultValue={recipeDetails.name}
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

          <legend>Ingredients:</legend>

          <StyledFieldSet>
            {ingredientInputs.map((ingredient) => (
              <>
                <input
                  id={`amount-${ingredient.id}`}
                  key={`amount-${ingredient.id}`}
                  type="text"
                  name={`amount-${ingredient.id}`}
                  placeholder="Amount"
                  required
                  defaultValue={ingredient.quantity}
                  onChange={
                    onHandleInputChange
                      ? (e) =>
                          onHandleInputChange(
                            ingredient.id,
                            e.target.id,
                            e.target.value
                          )
                      : undefined
                  }
                />
                <input
                  id={`ingredient-${ingredient.id}`}
                  key={`ingredient-${ingredient.id}`}
                  type="text"
                  name={`ingredient-${ingredient.id}`}
                  placeholder="Ingredient"
                  required
                  defaultValue={ingredient.name}
                  onChange={
                    onHandleInputChange
                      ? (e) =>
                          onHandleInputChange(
                            ingredient.id,
                            e.target.id,
                            e.target.value
                          )
                      : undefined
                  }
                />
                <button
                  type="button"
                  onClick={() => onHandleDeleteIngrendients(ingredient.id)}
                >
                  X
                </button>
              </>
            ))}
          </StyledFieldSet>

          <button type="button" onClick={onHandleAddIngredients}>
            Add Ingredient
          </button>

          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            rows="5"
            defaultValue={recipeDetails.description}
          />

          <button type="submit">{formButtonTitle}</button>
        </StyledForm>

        <StyledLinkContainer>
          <StyledLink href={abortLinkUrl}>Cancel</StyledLink>
        </StyledLinkContainer>
      </main>
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
  grid-template-columns: 19% 71% 9%;
  gap: 1%;
  margin-bottom: 2.5%;
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
  border-radius: 2rem;
  border: solid black 0.25rem;
`;
