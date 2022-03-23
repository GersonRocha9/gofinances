import styled from "styled-components/native";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;

  /* RFPercentage passando 42% e a lib faz um cálculo pra dar uma responsividade */
  height: ${RFPercentage(42)};

  background-color: ${({ theme }) => theme.COLORS.primary};
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${RFValue(50)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
`;

export const Photo = styled.Image`
  /* RFValue passando 48px e a lib faz um cálculo pra dar uma responsividade */
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(30)}px;
`;

export const User = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
`;

export const UserGreeting = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.shape};
  margin-left: 10px;
  font-family: ${({ theme }) => theme.FONTS.regular};
`;

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.shape};
  font-family: ${({ theme }) => theme.FONTS.bold};
  margin-left: 10px;
`;

export const Logout = styled.TouchableOpacity`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.COLORS.shape};
  border-radius: ${RFValue(25)}px;
`;
