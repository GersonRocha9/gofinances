import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.shape};
  width: ${RFValue(300)}px;
  border-radius: ${RFValue(9)}px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: ${RFValue(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.title};
  font-family: ${({ theme }) => theme.FONTS.regular};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.COLORS.success};
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  margin-top: ${RFValue(40)}px;
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.COLORS.title};
  font-family: ${({ theme }) => theme.FONTS.medium};
`;

export const LastTransaction = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.text};
  font-family: ${({ theme }) => theme.FONTS.regular};
`;
