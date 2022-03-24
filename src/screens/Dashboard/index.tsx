import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  Header,
  UserWrapper,
  HighlightCards,
  Container,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

import HighlightCard from "../../components/HighlightCard";
import TransactionCard, { TransactionCardProps } from "../../components/TransactionCard";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

const Dashboard = () => {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "income",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: { name: "Vendas", icon: "arrow-expand-up" },
      date: "13/04/2022",
    },
    {
      id: "2",
      type: "outcome",
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: { name: "Alimentação", icon: "food" },
      date: "10/04/2022",
    },
    {
      id: "3",
      type: "outcome",
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      category: { name: "Casa", icon: "home" },
      date: "10/04/2022",
    },
    {
      id: "4",
      type: "income",
      title: "Salário DB",
      amount: "R$ 1.500,00",
      category: { name: "Vendas", icon: "arrow-expand-up" },
      date: "13/04/2022",
    },
  ];

  return (
    <Container>
      <StatusBar style="light" />

      <Header>
        <UserWrapper>
          <UserInfo>
            {/* Usando o avatar do GitHub */}
            <Photo source={{ uri: "https://avatars.githubusercontent.com/u/38770302?v=4" }} />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Gerson</UserName>
            </User>
          </UserInfo>

          {/* Logout Icon -> as estilizaçoes estao dentro do styled-components */}
          <Icon name="logout-variant" />
        </UserWrapper>
      </Header>

      {/* Listagem de vários cards */}
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última atualização: 24 de Março"
        />

        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última atualização: 13 de Abril"
        />

        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="Última atualização: 15 de Abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
