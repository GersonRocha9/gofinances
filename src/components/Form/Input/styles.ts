import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  background-color: ${(props) => props.theme.COLORS.shape};
  width: 100%;
  padding: 16px 18px;
  font-size: ${RFValue(14)}px;
  border-radius: 5px;
  margin-bottom: 8px;
  font-family: ${(props) => props.theme.FONTS.regular};
  color: ${(props) => props.theme.COLORS.text_dark};
`;
