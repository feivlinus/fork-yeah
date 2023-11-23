import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function RecipeList({ recipes }) {
  return (
    <>
      <RecipeStyledUl>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipe/${recipe.id}`}>
              <StyledFigure>
                <Image
                  src={
                    recipe.imageURL
                      ? recipe.imageURL
                      : "/recipe-images/generic-food-3.png"
                  }
                  alt={recipe.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <StyledFigcaption>{recipe.name}</StyledFigcaption>
              </StyledFigure>
            </Link>
          </li>
        ))}
      </RecipeStyledUl>
      <StyledLinkCardContainer>
        <StyledLinkCard>
          <StyledLink href={"/recipe/create"}>✚</StyledLink>
        </StyledLinkCard>
      </StyledLinkCardContainer>
    </>
  );
}

const StyledFigure = styled.figure`
  position: relative;
  height: 150px;
  width: 150px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: -10;
  margin: 0;
`;

const StyledFigcaption = styled.figcaption`
  font-size: 0.8rem;
  position: absolute;
  left: 5%;
  bottom: 10%;
  color: #fff;
  text-shadow: 1px 1px 5px #000;
  z-index: 10;
`;

const RecipeStyledUl = styled.ul`
  all: unset;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 150px));
  justify-content: center;
  gap: 2.5vh 5vw;
  margin-bottom: 5%;
`;

const StyledLinkCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLinkCard = styled.div`
  height: 150px;
  width: 150px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 3rem;
`;
