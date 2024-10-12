import React from "react";
import DatePicker from "react-datepicker";
import { Control, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

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
        <DatePicker className="block rounded-md py-1.5 border-0 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600" />
      </div>
    </>
  );
}
