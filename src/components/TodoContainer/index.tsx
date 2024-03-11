import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TodoItem from "../TodoItem";
import NewTodoModal from "../NewTodoModal";
import { Container, NewTodoButton, NewTodoButtonText, Title } from "./styles";
import useTodoContainer from "./useTodoContainer";

export default function TodoContainer() {
  /* TODO empty items message */
 const {todoList, showModal, setShowModal, onSave} = useTodoContainer();

  return (
    <Container>
      {todoList ? (
        <FlatList
          data={todoList}
          renderItem={({ item }) => <TodoItem {...item} />}
          keyExtractor={(item) => item.id?.toString()}
          ListHeaderComponent={<Title>Todo List</Title>}
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
