import AsyncStorage from "@react-native-async-storage/async-storage";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ITodo } from "../../interfaces/todo";

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  category: yup
    .string()
    .oneOf(["Pessoal", "Escola", "Trabalho"], "Categoria inválida")
    .required("Categoria é obrigatória"),
  limitDate: yup
    .date()
    .min(new Date(), "A data não pode ser menor que hoje")
    .required("Data Limite é obrigatória"),
});

function useNewTodoForm(onSave: () => void) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    const todos = await AsyncStorage.getItem("todos");

    const newTodo = {
      ...data,
      id: todos ? JSON.parse(todos).length + 1 : 1,
    };

    if (todos !== null) {
      const parsedTodos = JSON.parse(todos);
      const newTodos = [...parsedTodos, newTodo];
      await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
    } else {
      await AsyncStorage.setItem("todos", JSON.stringify([newTodo]));
    }
    onSave();
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
}

export default useNewTodoForm;
