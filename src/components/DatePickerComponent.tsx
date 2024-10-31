import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Control, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { ja } from "date-fns/locale/ja";
// import { getYear } from "date-fns";

registerLocale("ja", ja);

export default function DatePickerComponent({
  id,
  label,
  name,
  control,
  minDate,
  validation,
}: {
  id: string;
  label: string;
  name: string;
  control: Control<any>;
  minDate?: Date;
  validation?: {
    required?: boolean | string;
  };
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
          rules={validation}
          render={({ field, fieldState: { error } }) => {
            return (
              <>
                <DatePicker
                  id={id}
                  minDate={minDate}
                  locale="ja"
                  selected={field.value}
                  dateFormat={"yyyy年MM月dd日"}
                  required={!!validation?.required}

                  onChange={(date) => {
                    if (date) {
                      const adjustedDate = new Date(
                        date.getTime() - date.getTimezoneOffset() * 60000,
                      );
                      field.onChange(adjustedDate);
                    }
                  }}
                  // 以下は使用しない
                  // renderCustomHeader={({
                  //   date,
                  //   changeYear,
                  //   changeMonth,
                  //   decreaseMonth,
                  //   increaseMonth,
                  //   prevMonthButtonDisabled,
                  //   nextMonthButtonDisabled,
                  // }) => {
                  //   const currentYear = getYear(new Date());

                  //   const years = Array.from(
                  //     { length: 11 },
                  //     (_, i) => currentYear + i,
                  //   );

                  // const months = [
                  //   "1月",
                  //   "2月",
                  //   "3月",
                  //   "4月",
                  //   "5月",
                  //   "6月",
                  //   "7月",
                  //   "8月",
                  //   "9月",
                  //   "10月",
                  //   "11月",
                  //   "12月",
                  // ];
                  // return (
                  //   <div className="flex justify-between items-center px-2 py-1">
                  //     <button
                  //       onClick={decreaseMonth}
                  //       disabled={prevMonthButtonDisabled}
                  //       className="cursor-pointer"
                  //     >
                  //       {"<"}
                  //     </button>
                  //     <div className="flex items-center">
                  //       <select
                  //         className="mr-2"
                  //         value={selectedDate.getFullYear()}
                  //         onChange={({ target: { value } }) =>
                  //           changeYear(Number(value))
                  //         }
                  //       >
                  //         {years.map((year) => (
                  //           <option key={year} value={year}>
                  //             {year}年
                  //           </option>
                  //         ))}
                  //       </select>
                  //       <select
                  //         value={date.getMonth()}
                  //         onChange={({ target: { value } }) =>
                  //           changeMonth(Number(value))
                  //         }
                  //       >
                  //         {months.map((month, index) => (
                  //           <option key={month} value={index}>
                  //             {month}
                  //           </option>
                  //         ))}
                  //       </select>
                  //     </div>
                  //     <button
                  //       onClick={increaseMonth}
                  //       disabled={nextMonthButtonDisabled}
                  //       className="cursor-pointer"
                  //     >
                  //       {">"}
                  //     </button>
                  //   </div>
                  // );
                  // }}
                  // ここまで使用しない
                  wrapperClassName="w-full"
                  className="block w-full rounded-md py-1.5 border-0 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600"
                />
                {error && (
                  <p className="text-xs text-red-500 p-1">{error.message}</p>
                )}
              </>
            )
          }}
        />
      </div>
    </>
  );
}
