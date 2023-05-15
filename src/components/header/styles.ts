import styled from "styled-components";
import { palette } from "../../Styles";

export const HeaderDiv = styled.div`
  height: 2%;
  background-color: ${palette.background.light};
  padding: 0.1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  color: ${palette.primary.main};
  svg {
    font-size: 2em;
    padding-right: 0.5em;
  }

  h1 {
    font-size: 1.3em;
  }
`;

export const Right = styled.div``;
