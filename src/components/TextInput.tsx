type TextInputProps = {
  label: string;
  name: string;
  id: string;
  width: string;
  placeholder: string;
};

export default function TextInput({
  label,
  name,
  id,
  width,
  placeholder,
}: TextInputProps) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={id}
        className={`block w-full ${width} rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        placeholder={placeholder}
      />
    </div>
  );
}
