import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import TransactionTypeButton from "../../components/Form/TransactionTypeButton";

import { Container, Header, Title, Form, Fields, TransactionsTypes } from "./styles";

const Register = () => {
  // useState para verificar qual botao esta selecionado
  const [transactionType, setTransactionType] = useState("up");

  const handleTransactionsTypeSelect = (type: "up" | "down") => {
    setTransactionType(type);
  };

  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionsTypes>
            <TransactionTypeButton
              title="Income"
              type="up"
              onPress={() => handleTransactionsTypeSelect("up")}
              isActive={transactionType === "up"}
            />

            <TransactionTypeButton
              title="Outcome"
              type="down"
              onPress={() => handleTransactionsTypeSelect("down")}
              isActive={transactionType === "down"}
            />
          </TransactionsTypes>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
};

export default Register;
