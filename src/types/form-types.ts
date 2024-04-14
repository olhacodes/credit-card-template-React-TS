import { HTMLInputTypeAttribute } from 'react';
import {
  FieldValues,
  Path,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

export interface FormElementProps<FormFieldValues extends FieldValues> {
  className?: string;
  disabled?: boolean;
  form: UseFormReturn<FormFieldValues>;
  label?: string;
  name: Path<FormFieldValues>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export interface FormViewProps<T extends FieldValues> {
  formSubmitHandler: SubmitHandler<T>;
  form: UseFormReturn<T>;
}
