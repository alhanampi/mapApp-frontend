import styled, { keyframes } from "styled-components";
import { rubberBand } from "react-animations";
import { palette } from "../../Styles";

const rubberBandAnimation = keyframes`${rubberBand}`;

export const FooterDiv = styled.div`
  position: fixed;
  bottom: 0;
  background-color: ${palette.background.light};
  width: 100%;
  `;

export const FooterContent = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Left = styled.div`
  font-size: 1.5em;
  align-items: center;
  letter-spacing: 0.1em;

  span {
    color: ${palette.primary.dark};
    font-weight: 700;
    font-size: 1.6em;
  }

  @media (max-width: 420px) and (orientation: portrait) {
    text-align: center;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Right = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 30%;
  }

  svg {
    margin: 1em;
    color: ${palette.primary.main};
    cursor: pointer;

    :hover {
      color: ${palette.primary.light};
      margin: 1em;
      animation: 0.5s ${rubberBandAnimation};
    }
  }

  @media (max-width: 600px) and (orientation: portrait) {
    width: 100%;
    margin-bottom: 3em;
  }

  @media (max-width: 420px) and (orientation: portrait) {
    svg {
      margin: 0;
    }
  }

  @media (max-width: 360px) and (orientation: portrait) {
    width: 200px;
  }
`;
