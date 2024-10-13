import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Control, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { ja } from "date-fns/locale/ja";

registerLocale("ja", ja);

export default function DatePickerComponent({
  id,
  label,
  name,
  control,
}: {
  id: string;
  label: string;
  name: string;
  control: Control<any>;
}) {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <DatePicker
              id={id}
              selected={field.value}
              locale={ja}
              dateFormat={"yyyy年MM月dd日"}
              // adjust to JST
              onChange={(date) => {
                if (date) {
                  const adjustedDate = new Date(
                    date.getTime() - date.getTimezoneOffset() * 60000
                  );
                  field.onChange(adjustedDate)
                }
              }}
              className="block rounded-md py-1.5 border-0 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600"
            />
          )}
        />
      </div>
    </>
  );
}
