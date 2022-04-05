import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${(props) => props.theme.COLORS.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  border-radius: ${RFValue(5)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Category = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.FONTS.regular};
  color: ${(props) => props.theme.COLORS.text};
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(12)}px;
  color: ${(props) => props.theme.COLORS.text};
`;
