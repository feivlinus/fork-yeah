import data from "@/db/data";
import Image from "next/image";
import styled from "styled-components";

export default function RecipeList() {
  if (!data) {
    return <p>Data not found</p>;
  }

  return (
    <RecipeStyledUl>
      {data.map((data) => (
        <li key={data.name}>
          <RecipeContainer>
            <Image
              src={data.imageURL}
              alt={data.name}
              width={150}
              height={150}
            />
            <RecipeTitle>{data.name}</RecipeTitle>
          </RecipeContainer>
        </li>
      ))}
    </RecipeStyledUl>
  );
}

const RecipeContainer = styled.div`
  position: relative;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const RecipeTitle = styled.p`
  position: absolute;
  font-size: 10px;
  left: 5%;
  top: 70%;
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
