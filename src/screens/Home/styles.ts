import styled from "styled-components/native";

export const ContainerTop = styled.View`
  flex: 2;
  /* Passando uma props pegando a cor primária lá no COLORS global */
  background-color: ${({ theme }) => theme.COLORS.primary};
  align-items: center;
  justify-content: center;
`;

export const ContainerBottom = styled.View`
  flex: 1;
  /* Passando uma props pegando a cor primária lá no COLORS global */
  background-color: ${({ theme }) => theme.COLORS.secondary};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.shape};
`;
