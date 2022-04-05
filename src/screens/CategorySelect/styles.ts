import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.background};
`;

export const Header = styled.View`
  background-color: ${(props) => props.theme.COLORS.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${(props) => props.theme.COLORS.shape};
  font-family: ${(props) => props.theme.FONTS.regular};
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => (props.isActive ? props.theme.COLORS.secondary : props.theme.COLORS.background)};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${(props) => props.theme.COLORS.text};
  margin-right: ${RFValue(16)}px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.FONTS.regular};
  color: ${(props) => props.theme.COLORS.text};
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${(props) => props.theme.COLORS.text};
`;

export const Footer = styled.View`
  padding-bottom: ${RFValue(24)}px;
`;
