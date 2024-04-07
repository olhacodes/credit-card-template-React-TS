import { useForm } from 'react-hook-form';

import Button from '../../button/Button';
import FormInput from '../form-input/FormInput';
import CreditCard from '../../creditcard/CreditCard';
import { CARD_TYPES } from '../../../constants/card-types';

import './CreditCardForm.css';

export interface CreditCardFormData {
  cardholderName: string;
  cardNumber: number;
  cardMonth: number;
  cvc: string;
}

const CreditCardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<CreditCardFormData>();

  const formValues = watch();

  const onSubmit = (data: CreditCardFormData) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <>
      <h1>Payment Details</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CreditCard {...formValues} cardTypes={CARD_TYPES} />
        <div className='form__wrapper'>
          <FormInput
            label='CARDHOLDER NAME'
            name='cardholderName'
            type='text'
            register={register}
            pattern={{
              pattern: /^[A-Za-z]+ [A-Za-z]+$/,
              message: 'Please enter the valid cardholder name',
            }}
            maxLength={{ value: 30, message: 'Cardholder name is too long' }}
            errors={errors}
            required={{ value: true, message: 'Cardholder name is required' }}
            errorMessage
          />
          <FormInput
            label='CARD NUMBER'
            name='cardNumber'
            type='number'
            register={register}
            pattern={{
              pattern: /^\d+$/,
              message: 'Only numbers are allowed',
            }}
            maxLength={{ value: 16, message: 'Card number is too long' }}
            errors={errors}
            required={{ value: true, message: 'Card number is required' }}
          />
          <FormInput
            label='EXPIRATION DATE'
            placeholder='Date'
            name='cardMonth'
            type='month'
            register={register}
            errors={errors}
            errorMessage='Year must be greater than or equal to current year'
            required={{
              value: true,
              message: 'Card date expiration is required',
            }}
          />
          <FormInput
            label='CVC'
            name='cvc'
            type='number'
            pattern={{
              pattern: /^\d+$/,
              message: 'Only numbers are allowed',
            }}
            register={register}
            errors={errors}
            maxLength={{ value: 4, message: 'CVC number is too long' }}
            required={{ value: true, message: 'CVC number is required' }}
          />
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </>
  );
};

export default CreditCardForm;
