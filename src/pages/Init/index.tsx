import { ReactNode } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import {
  Container,
  CanvasElipse,
  ContainerLogo,
  ContainerFigure,
  ContainerBtnLoginRegister,
  BtnLogin,
  BtnLoginText,
  BtnRegister,
  BtnRegisterText,
  ContainerDivider,
  Divider,
  DividerText,
  BtnGoogle,
  BtnGoogleText,
  BtnFacebook,
  BtnFacebookText,
  ContainerLogoSocial,
} from "./styles";

import Logo from "./../../assets/logo.svg";
import Figure from "./../../assets/figure_init_page.svg";
import GoogleLogo from "./../../assets/google_logo.svg";
import FacebookLogo from "./../../assets/facebook_logo.svg";

interface InitProps {
  children?: ReactNode;
}

function Init({ children }: InitProps) {
  return (
    <Container>
      <CanvasElipse></CanvasElipse>
      <ContainerLogo>
        <Logo width={RFValue(170)} height={RFValue(80)} />
      </ContainerLogo>
      <ContainerFigure>
        <Figure width={RFValue(400)} height={RFValue(240)} />
      </ContainerFigure>

      <ContainerBtnLoginRegister>
        <BtnLogin>
          <BtnLoginText>Login</BtnLoginText>
        </BtnLogin>
        <BtnRegister>
          <BtnRegisterText>Register</BtnRegisterText>
        </BtnRegister>

        <ContainerDivider>
          <Divider></Divider>
          <DividerText>Or login with</DividerText>
          <Divider></Divider>
        </ContainerDivider>

        <BtnGoogle>
          <ContainerLogoSocial>
            <GoogleLogo />
          </ContainerLogoSocial>
          <BtnGoogleText>Google</BtnGoogleText>
        </BtnGoogle>

        <BtnFacebook>
          <ContainerLogoSocial>
            <FacebookLogo />
          </ContainerLogoSocial>
          <BtnFacebookText>Facebook</BtnFacebookText>
        </BtnFacebook>
      </ContainerBtnLoginRegister>
    </Container>
  );
}

export default Init;
