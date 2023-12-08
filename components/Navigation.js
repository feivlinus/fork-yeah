import styled from "styled-components";
import NavigationIcon from "./Icons/NavigationIcon";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <StyledFooterContainer>
      <nav>
        <ul>
          <li>
            <StyledNavigationLink href="/">
              <NavigationIcon variant={"home"} isSelected={pathName === "/"} />
            </StyledNavigationLink>
          </li>
          <li>
            <StyledNavigationLink href="/recipe/create">
              <NavigationIcon
                variant={"create"}
                isSelected={pathName === "/recipe/create"}
              />
            </StyledNavigationLink>
          </li>
          <li>
            <StyledNavigationLink href="/favorites">
              <NavigationIcon
                variant={"favorites"}
                isSelected={pathName === "/favorites"}
              />
            </StyledNavigationLink>
          </li>
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
  background: var(--primary);
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
  -webkit-tap-highlight-color: transparent;
`;
