import React from "react";

import { Amount, Container, Footer, Header, Icon, LastTransaction, Title } from "./styles";

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total";
}

const icon = {
  up: "arrow-up",
  down: "arrow-down",
  total: "dollar-sign",
};

const HighlightCard = ({ type, title, amount, lastTransaction }: Props) => {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>

        {/* Passando a prop de acordo com cada item */}
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
};

export default HighlightCard;
