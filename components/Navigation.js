import styled from "styled-components";
import NavigationIcons from "./Icons/NavigationIcons";
import Link from "next/link";

export default function Navigation() {
  return (
    <StyledFooterContainer>
      <nav>
        <ul>
          <li>
            <StyledNavigationLink href="/">
              <NavigationIcons variant={"home"} color={"#BABABA"} size={32} />
            </StyledNavigationLink>
          </li>
          <li>
            <StyledNavigationLink href="/recipe/create">
              <NavigationIcons variant={"create"} color={"#BABABA"} size={32} />
            </StyledNavigationLink>
          </li>

          {/* THIS LINE OF CODE IS COMMENTED OUT,IT WILL COME IN THE NEXT USER STORY WHEN WE DIRECT THE USER TO THE FAVORITES PAGE */}
          {/* <Link href="/">
        <NavigationIcons variant={"favorites"} color={"#BABABA"} size={32} />
      </Link> */}
        </ul>
      </nav>
    </StyledFooterContainer>
  );
}

const StyledFooterContainer = styled.footer`
  display: flex;
  width: 100%;
  padding: 0.75rem;
  justify-content: center;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25) inset;
  bottom: 0;
  position: fixed;
  z-index: 50;
  ul {
    all: unset;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;
  }
`;

const StyledNavigationLink = styled(Link)`
  &:hover,
  &:active {
    svg {
      fill: #6e6e6e;
    }
  }
`;
