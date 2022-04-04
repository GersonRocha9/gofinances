import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.background};
`;

export const Header = styled.View`
  background-color: ${(props) => props.theme.COLORS.primary};
  width: 100%;
  height: ${RFValue(100)}px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${(props) => props.theme.COLORS.shape};
  font-family: ${(props) => props.theme.FONTS.regular};
`;

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  padding: ${RFValue(24)}px;
`;

export const Fields = styled.View``;

export const TransactionsTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(8)}px;
`;
