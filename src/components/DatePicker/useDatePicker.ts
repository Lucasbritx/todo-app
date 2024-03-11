import dayjs from "dayjs";
import { useState } from "react";

function useDatePicker(value: Date) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const dateFormatted = value && dayjs(value)?.format("DD/MM/YYYY");

  return {
    isDatePickerVisible,
    setDatePickerVisibility,
    dateFormatted,
  };
}

export default useDatePicker;
