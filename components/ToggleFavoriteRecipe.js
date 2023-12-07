import HeartIcon from "./Icons/HeartIcon";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function ToggleFavoriteRecipe({
  recipeId,
  isFavoriteFlag,
  onAddFavorite,
}) {
  const [isFavorite, setFavorite] = useState();

  function handleToggleFavorite() {
    setFavorite(!isFavorite);
    onAddFavorite(recipeId);
  }

  useEffect(() => {
    setFavorite(isFavoriteFlag);
  }, [isFavoriteFlag]);

  return (
    <StyledButton onClick={handleToggleFavorite}>
      <StyledHeartCircle>
        <HeartIcon
          variant={isFavorite ? "favorite" : "noFavorite"}
          color={"var(--light)"}
          size={"1.25rem"}
        />
      </StyledHeartCircle>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  all: unset;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    cursor: pointer;
  }
  &:focus,
  &:visited,
  &:active {
    outline: none;
  }
`;

const StyledHeartCircle = styled.div`
  border-radius: 2rem;
  background: var(--primary);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
