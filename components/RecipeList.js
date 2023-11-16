import data from "@/db/data";
import Image from "next/image";
import styled from "styled-components";

export default function RecipeList() {
  if (!data) {
    return <p>Data not found</p>;
  }

  return (
    <RecipeStyledUl>
      {data.map((recipe) => (
        <li key={recipe.name}>
          <StyledFigure>
            <Image
              src={recipe.imageURL}
              alt={recipe.name}
              // width={150}
              // height={150}
              fill
              style={{ objectFit: "cover" }}
            />
            <StyledFigcaption>{recipe.name}</StyledFigcaption>
          </StyledFigure>
        </li>
      ))}
    </RecipeStyledUl>
  );
}

const StyledFigure = styled.figure`
  position: relative;
  height: 150px;
  width: 150px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: -1;
  margin: 0;
`;

const StyledFigcaption = styled.figcaption`
  font-size: 10px;
  position: absolute;
  left: 5%;
  bottom: 10%;
  color: black;
  z-index: 1;
`;

const RecipeStyledUl = styled.ul`
  all: unset;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 150px));
  justify-content: center;
  gap: 2.5vh 5vw;
`;
