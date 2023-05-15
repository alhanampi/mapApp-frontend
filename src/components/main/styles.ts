import styled from "styled-components";
import { palette } from '../../Styles';

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const MapContainer = styled.div`
  max-height: 85vh;
  overflow: hidden;
`;

export const PopupCard = styled.div`
width: 18em;
display: flex;
flex-direction: column;
justify-content: space-around;

label {
  font-size: 1.2em;
  border-bottom: ${palette.primary.light} 0.1px solid;
  margin: 5px 0;
}

p, span {
  font-size: 0.9em;
}

.stars {
  color: ${palette.secondary.light};
  svg {
    font-size: 2em;
  }
}
`;