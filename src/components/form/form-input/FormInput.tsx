import {
  FieldValues,
} from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../shadch-ui/form';
import { Input } from '../../shadch-ui/input';
import { FormElementProps } from '@/src/types/form-types';

export const FormInput = <T extends FieldValues>(props: FormElementProps<T>) => (
  <FormField
    control={props.form.control}
    name={props.name}
    render={({ field }) => (
      <FormItem>
        <div className={props.className ? props.className : ''}>
          {props.label && <FormLabel>{props.label}</FormLabel>}
          <FormControl>
            <Input
              {...field}
              type={props.type}
              disabled={props.disabled}
              placeholder={props.placeholder}
            />
          </FormControl>
        </div>
        <FormMessage />
      </FormItem>
    )}
  />
);
FormInput.displayName = 'FormInput';
