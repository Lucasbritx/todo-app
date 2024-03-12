import React from "react";
import { FlatList, Text } from "react-native";
import TodoItem from "../TodoItem";
import NewTodoModal from "../NewTodoModal";
import { Container, Header, Title } from "./styles";
import useTodoContainer from "./useTodoContainer";
import TextField from "../TextField";
import { FAB } from "react-native-paper";

export default function TodoContainer() {
  /* TODO empty items message */
  const {
    todoList,
    showModal,
    setShowModal,
    onSave,
    searchText,
    setSearchText,
    filteredTodos,
  } = useTodoContainer();

  return (
    <Container>
      {todoList ? (
        <FlatList
          data={filteredTodos.length ? filteredTodos : todoList}
          renderItem={({ item }) => <TodoItem {...item} />}
          keyExtractor={(item) => item.id?.toString()}
          ListHeaderComponent={
            <Header>
              <Title>Todo List</Title>
              <TextField
                label="Pesquisar"
                leftIcon="magnify"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
              />
            </Header>
          }
        />
      ) : (
        <Text>
          Nenhum todo criado, comece a sua lista de tarefas clicanado no botão
          de adicionar
        </Text>
      )}
      <FAB
        icon="plus"
        style={{
          position: "absolute",
          borderRadius: 50,
          margin: 16,
          right: 0,
          bottom: 0,
        }}
        onPress={() => {
          setShowModal(true);
        }}
      />
      <NewTodoModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        onSave={onSave}
      />
    </Container>
  );
}
