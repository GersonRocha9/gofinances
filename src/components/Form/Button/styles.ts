import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.COLORS.secondary};
  border-radius: ${RFValue(5)}px;
  margin-top: ${RFValue(15)}px;
  align-items: center;
  padding: ${RFValue(18)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.theme.COLORS.shape};
  font-family: ${(props) => props.theme.FONTS.medium};
`;
