import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import './FormInput.css';
import { UseFormMaxLength, UseFormPattern, UseFormRequired } from '../../../types/react-hook-types';

interface FormInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label?: string;
  type?: 'text' | 'number' | 'month';
  placeholder?: string;
  errors?: FieldErrors<T>;
  pattern?: UseFormPattern;
  errorMessage?: string | boolean;
  maxLength?: UseFormMaxLength;
  required?: UseFormRequired;
}

const FormInput = <T extends FieldValues>({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  errors = {},
  pattern,
  errorMessage,
  maxLength,
  required 
}: FormInputProps<T>) => {
   const date = new Date();
   const currentYear = date.getFullYear();

  return (
    <div className='form-input__wrapper'>
      {label && (
        <label className='form-input__label' htmlFor={name as string}>
          {label}
        </label>
      )}
      <input
        id={name as string}
        type={type}
        placeholder={placeholder}
        {...register(name, {
          pattern: pattern?.pattern
            ? { value: pattern.pattern, message: pattern.message }
            : undefined,
          required: required,
          maxLength: maxLength,
          validate: (value) => {
            if (type === 'month') {
              const year = Number(value.split('-')[0]);
              return year >= currentYear || errorMessage;
            }
          },
        })}
        className={`form-input ${errors[name] ? 'invalid' : ''}`}
      />
      {errors[name] && (
        <span className='form-input__error'>
          {errors[name]?.type === 'required' && required?.message}
          {errors[name]?.type === 'maxLength' && maxLength?.message}
          {errors[name]?.type === 'pattern' && pattern?.message}
          {errors[name]?.type !== 'required' &&
            errors[name]?.type !== 'maxLength' && errors[name]?.type !== 'pattern' &&
            errorMessage}
        </span>
      )}
    </div>
  );
};

export default FormInput;
