const Input = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    required = false,
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
                {label}
            </label>

            <input
                required={required}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
          border border-gray-300
          rounded-xl
          px-4 py-3
          outline-none
          focus:ring-2
          focus:ring-pink-500
          focus:border-transparent
          transition-all
        "
            />
        </div>
    );
};

export default Input;