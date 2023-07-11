import { HiOutlineExclamationCircle } from "react-icons/hi";

type FormBuilderField = {
  _key: string;
  _type: "formBuilderField";
  type:
    | "text"
    | "email"
    | "phone"
    | "number"
    | "date"
    | "time"
    | "textarea"
    | "select"
    | "radio"
    | "checkbox"
    | "file";
  name: string;
  label: string;
  options?: string[];
  placeholder?: string;
  helperText?: string;
};
type FormInputProps = {
  field: FormBuilderField;
  errors: any;
};

const FormInput = (props: FormInputProps) => {
  const { type, name, label, placeholder, helperText } = props.field;
  const { errors } = props.errors;
  if (type === "text") {
    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name={name}
            id={name}
            className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            defaultValue={placeholder}
            aria-invalid={errors?.name ? "true" : "false"}
            aria-describedby={`${name}-error`}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <HiOutlineExclamationCircle
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        </div>
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          Not a valid {label}.
        </p>
      </div>
    );
  }
  if (type === "email") {
    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div>
          <input
            type="email"
            name={name}
            id={name}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder={placeholder}
            aria-describedby={`${name}-description`}
          />
        </div>
        {helperText && (
          <p className="text-sm text-gray-500" id={`${name}-description`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
  if (type === "phone") {
    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div>
          <input
            type="tel"
            name={name}
            id={name}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder={placeholder}
            aria-describedby={`${name}-description`}
          />
        </div>
        {helperText && (
          <p className="text-sm text-gray-500" id={`${name}-description`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
  if (type === "number") {
    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div>
          <input
            type="number"
            name={name}
            id={name}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder={placeholder}
            aria-describedby={`${name}-description`}
          />
        </div>
        {helperText && (
          <p className="text-sm text-gray-500" id={`${name}-description`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
  if (type === "date") {
    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div>
          <input
            type="date"
            name={name}
            id={name}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder={placeholder}
            aria-describedby={`${name}-description`}
          />
        </div>
        {helperText && (
          <p className="text-sm text-gray-500" id={`${name}-description`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
  if (type === "time") {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input type="time" name={name} id={name} />
      </div>
    );
  }
  if (type === "textarea") {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <textarea name={name} id={name} />
      </div>
    );
  }

  if (type === "file") {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input type="file" name={name} id={name} />
      </div>
    );
  }

  return <span className="text-red py-12">Unknown Field Type</span>;
};

export default FormInput;
