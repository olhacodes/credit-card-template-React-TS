import Button from '../../button/Button';
// import CreditCard from '../../creditcard/CreditCard';
import { CARD_TYPES } from '../../../constants/card-types';

import './CreditCardForm.css';
import { Form } from '../../shadch-ui/form';
import { z } from 'zod';
import { FormViewProps } from '@/src/types/form-types';
import { FormInput } from '../form-input/FormInput';

export const CreditCardFormData = z.object({
  cardholderName: z
    .string({
      required_error: 'Cardholder name is required',
      invalid_type_error: 'Please enter the valid cardholder name',
    })
    .max(30, {
      message: 'Cardholder name is too long',
    }),
  cardNumber: z
    .number({
      required_error: 'Card number is required',
      invalid_type_error: 'Please enter the valid card number',
    })
    .max(16, {
      message: 'Card number is too long',
    }),
  cardMonth: z.number(),
  cvc: z
    .number({
      required_error: 'CVC number is required',
      invalid_type_error: 'Please enter the valid CVC number',
    })
    .max(4, {
      message: 'CVC number is too long',
    }),
});

interface FormInputType { 
  label: string;
  name: string;
  type: string;
}

const formInputs: FormInputType[] = [
  {
    label: 'CARDHOLDER NAME',
    name: 'cardholderName',
    type: 'text',
  },
  {
    label: 'CARD NUMBER',
    name: 'cardNumber',
    type: 'number',
  },
  {
    label: 'EXPIRATION DATE',
    name: 'cardMonth',
    type: 'month',
  },
  {
    label: 'CVC',
    name: 'cvc',
    type: 'number',
  },
];

export interface CreditCardFormDataProps extends FormViewProps<z.infer<typeof CreditCardFormData>> {}

const CreditCardForm = (props: CreditCardFormDataProps) => {
  const { form, formSubmitHandler } = props;

  return (
    <div className='flex flex-col gap-10'>
      <h1>Payment Details</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(formSubmitHandler)} className='flex flex-col'>
          {/* <CreditCard {...form} cardTypes={CARD_TYPES} /> */}
          {formInputs.map((input) => (
            <FormInput
              form={form}
              label={input.label}
              name={
                input.name as
                  | 'cardholderName'
                  | 'cardNumber'
                  | 'cardMonth'
                  | 'cvc'
              }
              type={input.type}
              disabled={props.form.formState.isSubmitting}
              className='flex flex-col gap-5'
            />
          ))}
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreditCardForm;
