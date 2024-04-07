import Box from './components/box/Box';

import './App.css';
import CreditCardForm from './components/form/credit-card-form/CreditCardForm';

const App = () => {
  return (
    <div className='App'>
      <Box>
        <CreditCardForm />
      </Box>
    </div>
  );
};

export default App;
