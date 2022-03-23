import React from "react";
import { ThemeProvider } from "styled-components";

import AppLoading from "expo-app-loading";

// importando as fontes que serão utilizadas no app
// useFonts é um hook que retorna uma funçao para retornar as fontes
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import Dashboard from "./src/screens/Dashboard";
import Home from "./src/screens/Home";

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  // Se a fonte não estiver carregada, exibe o AppLoading
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    // ThemeProvider serve para passar qual o tema do app será utilizado

    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
