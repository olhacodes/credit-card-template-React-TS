import React from 'react';
import { useEffect, useState } from 'react';

import { CardType } from '../../types/card-type';
import { LogoAmEx, LogoDisc, LogoMaes, LogoMC, LogoVisa } from '../../assets/logos/index';

import './CardTypeIcons.css';

export interface CreditCardProps {
  cardTypes: Array<CardType>;
  cardNumber: number;
}

const CardTypeIcons: React.FC<CreditCardProps> = ({
  cardTypes,
  cardNumber,
}) => {
  const [cardType, setCardType] = useState<CardType | null>(null);

  useEffect(() => {
    const detectedCardType = cardTypes.find((type) =>
      type.IIN.test(cardNumber?.toString())
    );
    setCardType(detectedCardType || null);
  }, [cardNumber, cardTypes]);

  const renderCardTypeImage = (type: string) => {
    let brandType;
    switch (type) {
      case 'AmEx':
        brandType = LogoAmEx;
        break;
      case 'Disc':
        brandType = LogoDisc;
        break;
      case 'MC':
        brandType = LogoMC;
        break;
      case 'Maes':
        brandType = LogoMaes;
        break;
      case 'Visa':
        brandType = LogoVisa;
        break;
      default:
        brandType = LogoVisa;
        break;
    }
    return brandType;
  };
  return (
    <>
      {cardType &&
        React.createElement(renderCardTypeImage(cardType.type), {
          className: 'credit-card-type__icons',
        })}
    </>
  );
};

export default CardTypeIcons;
