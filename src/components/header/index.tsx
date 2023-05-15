import { FC } from "react";
import { HeaderDiv, Right, Left } from "./styles";
import { FiMapPin } from "react-icons/fi";

const HeaderContainer: FC = () => {
  return (
    <HeaderDiv>
      <Left>
        <FiMapPin />
        <h1>Where the pin?</h1>
      </Left>
      <Right>some user data here</Right>
    </HeaderDiv>
  );
};

export default HeaderContainer;
