import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList } from "react-native";

import Button from "../../components/Form/Button";
import { categories } from "../../utils/categories";
import { Category, Container, Footer, Header, Icon, Name, Separator, Title } from "./styles";

interface CategoryProps {
  key: string;
  name: string;
}

interface Props {
  category: CategoryProps;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}

const CategorySelect = ({ category, setCategory, closeSelectCategory }: Props) => {
  const handleSelectCategory = (category: CategoryProps) => {
    setCategory(category);
  };

  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category onPress={() => handleSelectCategory(item)} isActive={category.key === item.key}>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
};

export default CategorySelect;
