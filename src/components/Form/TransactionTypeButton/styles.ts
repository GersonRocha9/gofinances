import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface IconProps {
  type: "up" | "down";
}

interface ContainerProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48.5%;
  flex-direction: row;
  align-items: center;
  border: 1.5px solid ${({ theme }) => theme.COLORS.text};
  border-radius: ${RFValue(5)}px;
  padding: ${RFValue(16)}px;
  margin-bottom: ${RFValue(10)}px;
  margin-right: ${RFValue(10)}px;
  justify-content: center;
  ${({ isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: ${({ theme }) => theme.COLORS.success_light};
      border: none;
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: ${({ theme }) => theme.COLORS.danger_light};
      border: none;
    `}
`;

export const Icon = styled(MaterialCommunityIcons)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(12)}px;
  color: ${({ theme, type }) => (type === "up" ? theme.COLORS.success : theme.COLORS.danger)};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.regular};
  color: ${({ theme }) => theme.COLORS.text};
`;
