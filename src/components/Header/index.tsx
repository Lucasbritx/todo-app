import React from "react";
const DeltaLogo = require("../../assets/delta-logo.png");
import HEADER_CONSTS from "../../mocks/header";
import { HeaderContainer, Image, WelcomeText } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Image source={DeltaLogo} accessibilityLabel="Delta logo" />
      <WelcomeText>{HEADER_CONSTS.welcome}</WelcomeText>
    </HeaderContainer>
  );
}
