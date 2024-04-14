import React from 'react';

import { CardType } from '../../types/card-type';
import CardTypeIcons from '../icons/CardTypeIcons';
// import { CreditCardFormData } from '../form/credit-card-form/CreditCardForm';

import './CreditCard.css';

// export interface CreditCardProps extends CreditCardFormData {
//   cardTypes: Array<CardType>;
// }

const CreditCard = () => {
  const formatCardNumber = (number: number) => {
    const str = number.toString().replace(/\s/g, '');
    let formattedText = '';
    for (let i = 0; i < str.length; i += 4) {
      formattedText += str.substring(i, i + 4) + ' ';
    }
    return formattedText.trim();
  };

  return (
    <div className='credit-card'>
      {/* <CardTypeIcons cardNumber={cardNumber} cardTypes={cardTypes} />
      <div className='credit-card__number-container'>
        <div className='credit-card__number'>
          {cardNumber ? formatCardNumber(cardNumber) : '#### #### #### ####'}
        </div>
        <div className='credit-card__name'>
          {cardholderName ? cardholderName : 'FULL NAME'}
        </div>
      </div>
      <div className='credit-card__expiry-container'>
        <div className='credit-card__expiry'>
          {cardMonth
            ? new Date(`${cardMonth}-01`).toLocaleDateString('en-US', {
                month: '2-digit',
                year: '2-digit',
              })
            : 'DATE'}
        </div>
        <div className='credit-card__cvc'>{cvc ? cvc : 'CVC'}</div>
      </div> */}
    </div>
  );
};

export default CreditCard;
