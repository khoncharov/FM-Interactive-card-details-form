export const DEFAULT_CARD_NUMBER = '0000 0000 0000 0000';
export const DEFAULT_CARDHOLDER = 'Jane Appleseed';
export const DEFAULT_CARD_EXP_MONTH = '00';
export const DEFAULT_CARD_EXP_YEAR = '00';
export const DEFAULT_CARD_CVC = '000';

export const MAX_NAME_LENGTH = 32;
export const MAX_CARD_NUM_LENGTH = 16;
export const MAX_CARD_CVC_LENGTH = 3;
export const MAX_CARD_EXP_LENGTH = 2;

export const MSG_REQUIRED_FIELD = `Can't be blank`;
export const MSG_WRONG_NAME = 'Latin letters, space and hyphen only';
export const MSG_WRONG_NUMBER = 'Numbers only';
export const MSG_WRONG_LENGTH = (length: number) => `Must be ${length} digit number`;
export const MSG_WRONG_MONTH = 'Wrong month number';
