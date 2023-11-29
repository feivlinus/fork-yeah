import styled from "styled-components";
import NavigationIcons from "./Icons/NavigationIcons";
import Link from "next/link";

export default function Navigation() {
  return (
    <StyledNavigationContainer>
      <StyledNavigationLink href="/">
        <NavigationIcons variant={"home"} color={"#BABABA"} size={32} />
      </StyledNavigationLink>

      <StyledNavigationLink href="/recipe/create">
        <NavigationIcons variant={"create"} color={"#BABABA"} size={32} />
      </StyledNavigationLink>

      {/* <Link href="/">
        <NavigationIcons variant={"favorites"} color={"#BABABA"} size={32} />
      </Link> */}
    </StyledNavigationContainer>
  );
}

const StyledNavigationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  padding: 0.6875rem 1.5625rem;
  justify-content: center;
  align-items: flex-start;
  gap: 4.6875rem;
  flex-shrink: 0;
  gap: 4.5 rem;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25) inset;
  position: absolute;
  bottom: 0;
  position: fixed;
  z-index: 50;
`;

const StyledNavigationLink = styled(Link)`
  &:hover,
  &:active {
    svg {
      fill: #6e6e6e;
    }
  }
`;
