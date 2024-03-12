import React from "react";
import { FlatList, Text, TextInput } from "react-native";
import TodoItem from "../TodoItem";
import NewTodoModal from "../NewTodoModal";
import {
  Container,
  Header,
  NewTodoButton,
  NewTodoButtonText,
  Title,
} from "./styles";
import useTodoContainer from "./useTodoContainer";
import TextField from "../TextField";

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
                placeholder="Buscar por nome..."
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
      <NewTodoButton
        onPress={() => {
          setShowModal(true);
        }}
      >
        <NewTodoButtonText>+</NewTodoButtonText>
      </NewTodoButton>
      <NewTodoModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        onSave={onSave}
      />
    </Container>
  );
}
