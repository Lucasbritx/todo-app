import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import { ITodo } from "../../interfaces/todo";

function useTodoItem(id: number, limitDate: Date) {
  const formattedDate = dayjs(limitDate).format("DD/MM/YYYY");
  const isOutdated = dayjs(limitDate).isBefore(dayjs(), "day");

  const checkItem = async (completed: boolean) => {
    const todos = await AsyncStorage.getItem("todos");
    const parsedTodos = todos && JSON.parse(todos);
    const updatedTodos = parsedTodos.map((todo: ITodo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
    });
    await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return {
    formattedDate,
    checkItem,
    isOutdated,
  };
}

export default useTodoItem;
