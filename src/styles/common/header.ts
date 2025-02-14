import { styled } from "goober";

const StyledHeader = styled("header")`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;
`;

const StyledSymbol = styled("img")`
  width: 70px;
`;

export default Object.assign(StyledHeader, { Symbol: StyledSymbol });
