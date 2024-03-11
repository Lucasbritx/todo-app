import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ITodo } from "../../interfaces/todo";

function useTodoContainer() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<ITodo[]>([]);

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
  };
}

export default useTodoContainer;
