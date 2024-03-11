import React from "react";
import { Controller, FieldError } from "react-hook-form";
import { Button, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import TextField from "../TextField";
import DatePicker from "../DatePicker";
import { FormContainer, TextError } from "./styles";
import dayjs from "dayjs";
import useNewTodoForm from "./useNewTodoForm";

dayjs.locale("pt-br");

const SELECT_CATEGORY_ITEMS = [
  { label: "Pessoal", value: "Pessoal" },
  { label: "Escola", value: "Escola" },
  { label: "Trabalho", value: "Trabalho" },
];

interface INewTodoForm {
  onSave: () => void;
}

interface IError {
  error: FieldError | undefined;
}

const ErrorText = ({ error }: IError) =>
  error && <TextError>{error.message?.toString()}</TextError>;

const NewTodoForm = ({ onSave }: INewTodoForm) => {
  const { control, handleSubmit, errors, onSubmit } = useNewTodoForm(onSave);

  return (
    <FormContainer>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <TextField
              label="Nome*:"
              placeholder="Digite o nome da sua meta"
              value={value}
              onChangeText={onChange}
              hasError={!!errors.name}
            />
            <ErrorText error={errors.name} />
          </>
        )}
        name="name"
      />

      <Text>Categoria*:</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <>
            <RNPickerSelect
              onValueChange={field.onChange}
              placeholder={{
                label: "Selecione a categoria",
                value: null,
              }}
              items={SELECT_CATEGORY_ITEMS}
              {...field}
            />
            <ErrorText error={errors.category} />
          </>
        )}
        name="category"
      />

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <DatePicker
              label="Selecione a data limite*"
              onChange={onChange}
              value={value}
            />
            <ErrorText error={errors.limitDate} />
          </>
        )}
        name="limitDate"
      />

      <Button title="Criar" onPress={handleSubmit(onSubmit)} />
    </FormContainer>
  );
};

export default NewTodoForm;
