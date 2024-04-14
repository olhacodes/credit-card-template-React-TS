import Box from './components/box/Box';

import './App.css';
import CreditCardForm, { CreditCardFormData } from './components/form/credit-card-form/CreditCardForm';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const App = () => {
  const creditCardForm = useForm<z.infer<typeof CreditCardFormData>>({
    resolver: zodResolver(CreditCardFormData),
    defaultValues: {
      cardholderName: '',
      cardNumber: 0,
      cardMonth: 0,
      cvc: 0,
    },
  });

  const submitCreditCardForm = (formData: z.infer<typeof CreditCardFormData>) => {
    alert(JSON.stringify(formData));
  };

  return (
    <div className='App'>
      <Box>
        <CreditCardForm
          form={creditCardForm}
          formSubmitHandler={submitCreditCardForm}
        />
      </Box>
    </div>
  );
};

export default App;
