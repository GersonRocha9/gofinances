import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface TypeProps {
  type: "income" | "outcome";
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.shape};
  border-radius: ${RFValue(9)}px;
  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.title};
  font-family: ${({ theme }) => theme.FONTS.regular};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text<TypeProps>`
  color: ${({ theme, type }) => (type === "income" ? theme.COLORS.success : theme.COLORS.danger)};
  font-family: ${({ theme }) => theme.FONTS.regular};
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(2)}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(19)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.COLORS.text};
  margin-right: ${RFValue(17)}px;
`;

export const CategoryName = styled.Text`
  color: ${({ theme }) => theme.COLORS.text};
  font-family: ${({ theme }) => theme.FONTS.regular};
  font-size: ${RFValue(14)}px;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.COLORS.text};
  font-family: ${({ theme }) => theme.FONTS.regular};
  font-size: ${RFValue(14)}px;
`;
