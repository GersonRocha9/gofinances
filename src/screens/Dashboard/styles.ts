import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DataListProps } from ".";

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
  /* Funçao getStatusBarHeight() ajuda para casos de iPhone*/
  margin-top: ${getStatusBarHeight() + 28}px;
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

// Criando um componente com styled-components para o botão de logout
export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.COLORS.secondary};
`;

// ScrollView serve para rolar para o lado ou pra baixo
export const HighlightCards = styled.ScrollView.attrs({
  // horizontal => um ao lado do outro
  // showsHorizontalScrollIndicator={false} => tirar a barra de rolagem
  // contentContainerStyle => espaçamento
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24,
  },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
  z-index: 2;
`;

export const Transactions = styled.View`
  flex: 1%;
  background-color: ${({ theme }) => theme.COLORS.background};
  padding: 0 24px;
  margin-top: ${RFPercentage(10)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.title};
  font-family: ${({ theme }) => theme.FONTS.regular};
  margin-bottom: ${RFValue(16)}px;
`;

export const TransactionsList = styled(
  FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;
