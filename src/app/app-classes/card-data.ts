import {
  MAX_CARD_CVC_LENGTH,
  MAX_CARD_EXP_LENGTH,
  MAX_CARD_NUM_LENGTH,
  MSG_REQUIRED_FIELD,
  MSG_WRONG_LENGTH,
  MSG_WRONG_MONTH,
  MSG_WRONG_NAME,
  MSG_WRONG_NUMBER,
} from '../const';
import {
  isEmptyField,
  isInvalidCardholder,
  isInvalidLength,
  isInvalidMonth,
  isInvalidNumber,
} from '../validation-rules';

export default class CardData {
  holderName: string = '';
  number: string = '';
  expMonth: string = '';
  expYear: string = '';
  cvc: string = '';

  holderNameErrMsg: string = '';
  numberErrMsg: string = '';
  expMonthErrMsg: string = '';
  expYearErrMsg: string = '';
  cvcErrMsg: string = '';

  get isValidHolderName(): boolean {
    if (isEmptyField(this.holderName)) {
      this.holderNameErrMsg = MSG_REQUIRED_FIELD;

      return false;
    } else if (this.holderName && isInvalidCardholder(this.holderName)) {
      this.holderNameErrMsg = MSG_WRONG_NAME;

      return false;
    }

    this.holderNameErrMsg = '';
    return true;
  }

  get isValidNumber(): boolean {
    if (isEmptyField(this.number)) {
      this.numberErrMsg = MSG_REQUIRED_FIELD;

      return false;
    } else if (this.number && isInvalidNumber(this.number)) {
      this.numberErrMsg = MSG_WRONG_NUMBER;

      return false;
    } else if (this.number && isInvalidLength(this.number, MAX_CARD_NUM_LENGTH)) {
      this.numberErrMsg = MSG_WRONG_LENGTH(MAX_CARD_NUM_LENGTH);

      return false;
    }

    this.numberErrMsg = '';
    return true;
  }

  get isValidExpMonth(): boolean {
    if (isEmptyField(this.expMonth)) {
      this.expMonthErrMsg = MSG_REQUIRED_FIELD;

      return false;
    } else if (this.expMonth && isInvalidNumber(this.expMonth)) {
      this.expMonthErrMsg = MSG_WRONG_NUMBER;

      return false;
    } else if (this.expMonth && isInvalidMonth(this.expMonth)) {
      this.expMonthErrMsg = MSG_WRONG_MONTH;

      return false;
    }

    this.expMonthErrMsg = '';
    return true;
  }

  get isValidExpYear(): boolean {
    if (isEmptyField(this.expYear)) {
      this.expYearErrMsg = MSG_REQUIRED_FIELD;

      return false;
    } else if (this.expYear && isInvalidNumber(this.expYear)) {
      this.expYearErrMsg = MSG_WRONG_NUMBER;

      return false;
    } else if (this.expYear && isInvalidLength(this.expYear, MAX_CARD_EXP_LENGTH)) {
      this.expYearErrMsg = MSG_WRONG_LENGTH(MAX_CARD_EXP_LENGTH);

      return false;
    }

    this.expYearErrMsg = '';
    return true;
  }

  get isValidCvc(): boolean {
    if (isEmptyField(this.cvc)) {
      this.cvcErrMsg = MSG_REQUIRED_FIELD;

      return false;
    } else if (this.cvc && isInvalidNumber(this.cvc)) {
      this.cvcErrMsg = MSG_WRONG_NUMBER;

      return false;
    } else if (this.cvc && isInvalidLength(this.cvc, MAX_CARD_CVC_LENGTH)) {
      this.cvcErrMsg = MSG_WRONG_LENGTH(MAX_CARD_CVC_LENGTH);

      return false;
    }

    this.cvcErrMsg = '';
    return true;
  }

  get isValidForm(): boolean {
    return (
      this.isValidHolderName &&
      this.isValidNumber &&
      this.isValidExpMonth &&
      this.isValidExpYear &&
      this.isValidCvc
    );
  }

  reset(): void {
    this.holderName = '';
    this.number = '';
    this.expMonth = '';
    this.expYear = '';
    this.cvc = '';
  }

  data() {
    return {
      holderName: this.holderName,
      number: this.number,
      expMonth: this.expMonth,
      expYear: this.expYear,
      cvc: this.cvc,
    };
  }
}
