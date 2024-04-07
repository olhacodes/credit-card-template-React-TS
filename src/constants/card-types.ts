import { CardType } from '../types/card-type';

export const CARD_TYPES: Array<CardType> = [
  {
    name: 'American Express',
    type: 'AmEx',
    IIN: /^3[47]/,
  },
  {
    name: 'Discover Card',
    type: 'Disc',
    IIN: /^6011|^622(12[6-9]|1[3-9]|[2-8]|9[01]|92[0-5])|^(64[4-9])|^65/,
  },
  {
    name: 'Maestro',
    type: 'Maes',
    IIN: /^5(0|[6-8])|^6/,
  },
  {
    name: 'MasterCard',
    type: 'MC',
    IIN: /^2(22[1-9]|2[3-9]|[3-6]|7[01]|720)|^(5[1-5])/,
  },
  {
    name: 'Visa',
    type: 'Visa',
    IIN: /^4/,
  },
];
