export interface CardInformation {
  holder: string;
  number: string;
  expirationMonth: string;
  expirationYear: string;
  cvc: string;
}

export enum FormName {
  CARDHOLDER = 'cardholderName',
  CARD_NUM = 'cardNumber',
  CARD_EXP_MONTH = 'cardExpirationMonth',
  CARD_EXP_YEAR = 'cardExpirationYear',
  CARD_CVC = 'cardCvc',
}
