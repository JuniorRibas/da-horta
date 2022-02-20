import styled from "styled-components/native";
import { Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};

  position: relative;
`;

export const ContainerLogo = styled.View`
  height: ${RFValue(115)}px;

  justify-content: flex-end;
  align-items: center;
`;

export const CanvasElipse = styled.View`
  height: 500px;
  width: 589px;

  background-color: ${({ theme }) => theme.colors.background_primary};

  position: absolute;

  top: -${RFValue(150)}px;
  left: ${Platform.OS === "ios" ? -RFValue(120) : -RFValue(140)}px;
  border-radius: 250px;
`;

export const ContainerFigure = styled.View`
  justify-content: flex-end;
  align-items: center;
`;

export const ContainerBtnLoginRegister = styled.View`
  flex-direction: column;

  justify-content: space-between;


height: ${RFValue(250)}px;
  margin-top: 77px
  padding: 0px 20px;
`;

export const BtnLogin = styled.TouchableOpacity`
  height: ${RFValue(54)}px;

  background-color: ${({ theme }) => theme.colors.background_primary};

  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;

export const BtnLoginText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.simibold};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.font_white};
`;

export const BtnRegister = styled.TouchableOpacity`
  height: ${RFValue(54)}px;

  border-width: 1.5px;

  border-color: ${({ theme }) => theme.colors.background_primary};

  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;

export const BtnRegisterText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.simibold};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.font_primary};
`;

export const ContainerDivider = styled.View`
  flex-direction: row;
  height: ${RFValue(18)}px;

  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.View`
  height: ${RFValue(0.7)}px;
  width: ${RFValue(110)}px;

  background-color: ${({ theme }) => theme.colors.background_black};
`;

export const DividerText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme }) => theme.colors.font_black};
`;

export const BtnGoogle = styled.TouchableOpacity`
  flex-direction: row;

  height: ${RFValue(38)}px;

  border-width: 1.5px;

  border-color: #BDBDBD

  justify-content: center;
  align-items: center;

  border-radius: 10px;

  position: relative;
`;

export const BtnGoogleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.font_black};
`;

export const BtnFacebook = styled.TouchableOpacity`
  height: ${RFValue(38)}px;

  background-color: #2d9cdb;

  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;

export const BtnFacebookText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.font_white};
`;

export const ContainerLogoSocial = styled.View`
  position: absolute;

  left: 0px;

  margin-left: 10px;
`;
