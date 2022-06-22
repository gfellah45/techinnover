import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<InputProps> {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  validation?: Record<string, any>;
}

interface ISelectProps extends React.SelectHTMLAttributes<ISelectProps> {
  options: Array<{ value: string; label: string }>;
  placeholder: string;
  name: string;
  label: string;
  validation?: Record<string, any>;
}

export const FInputs: FC<InputProps> = ({
  type,
  label,
  name,
  placeholder,
  validation,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-500">{label}</label>
      <input
        {...register(name, { ...validation })}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs">{errors[name].message}</p>
      )}
    </div>
  );
};

export const FSelect: FC<ISelectProps> = ({
  label,
  name,
  placeholder,
  options,
  validation,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-500">{label}</label>
      <select {...register(name, { ...validation })} name={name}>
        <option defaultValue="" value="">
          {placeholder}
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {errors[name] && (
        <p className="text-red-500 text-xs">{errors[name].message}</p>
      )}
    </div>
  );
};
