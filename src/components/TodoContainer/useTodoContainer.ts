import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ITodo } from "../../interfaces/todo";

function useTodoContainer() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);

  const filterTodos = (todos: ITodo[], text: string) => {
    return todos.filter((todo) => todo.name.includes(text));
  };

  useEffect(() => {
    setFilteredTodos(filterTodos(todoList, searchText));
  }, [searchText]);

  const getTodos = async () => {
    try {
      const todos = await AsyncStorage.getItem("todos");
      if (todos !== null) {
        setTodoList(JSON.parse(todos));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
    setSearchText("");
  }, []);

  const onSave = () => {
    getTodos();
    setShowModal(false);
  };

  return {
    todoList,
    showModal,
    setShowModal,
    onSave,
    searchText,
    setSearchText,
    filteredTodos,
  };
}

export default useTodoContainer;
