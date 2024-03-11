import dayjs from "dayjs";
import React, { useState } from "react";
import { Button, Modal, Text } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import useDatePicker from "./useDatePicker";

interface IDatePicker {
  label: string;
  onChange: (params: any) => void;
  value: Date;
}

const DatePicker = ({ label, onChange, value }: IDatePicker) => {
  const { isDatePickerVisible, setDatePickerVisibility, dateFormatted } =
    useDatePicker(value);

  return (
    <>
      <Text>{label}</Text>
      <Button
        title={
          !!dateFormatted ? dateFormatted.toString() : "Selecione uma data"
        }
        onPress={() => setDatePickerVisibility(true)}
      />
      {isDatePickerVisible && (
        <Modal>
          <DateTimePicker
            mode="single"
            date={value}
            onChange={(data: any) => {
              setDatePickerVisibility(false);
              onChange(data.date);
            }}
          />
        </Modal>
      )}
    </>
  );
};
export default DatePicker;
