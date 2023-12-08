import Head from "next/head";
import styled from "styled-components";

export default function HeadComponent() {
  return (
    <>
      <Head>
        <title>Fork yeah!</title>;
      </Head>
      <StyledHeadContainer>
        <h1>Fork yeah!</h1>
      </StyledHeadContainer>
    </>
  );
}

const StyledHeadContainer = styled.div`
  position: absolute;
  display: block;
  top: 0px;
  height: 4.5rem;
  width: 100%;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.7) 0px 0px 5px 0px;

  h1 {
    all: unset;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: var(--secondary);
    padding: 1rem 0;
  }
`;
