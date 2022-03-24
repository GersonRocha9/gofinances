import { StatusBar } from "expo-status-bar";
import React from "react";

import { Header, UserWrapper, Container, UserInfo, Photo, User, UserGreeting, Logout, UserName } from "./styles";

const Dashboard = () => {
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

          <Logout />
        </UserWrapper>
      </Header>
    </Container>
  );
};

export default Dashboard;
