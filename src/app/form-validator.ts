import {
  MAX_CARD_CVC_LENGTH,
  MAX_CARD_NUM_LENGTH,
  MSG_REQUIRED_FIELD,
  MSG_WRONG_LENGTH,
  MSG_WRONG_MONTH,
  MSG_WRONG_NAME,
  MSG_WRONG_NUMBER,
} from './const';
import FormChangeHandler from './form-change-handler';
import {
  isEmptyField,
  isInvalidCardholder,
  isInvalidLength,
  isInvalidMonth,
  isInvalidNumber,
} from './validation-rules';

export default class FormValidation extends FormChangeHandler {
  // private errorMsg1

  // private errorMsg2

  // private errorMsg3

  // private errorMsg4

  constructor() {
    super();
  }

  private checkCardholderName(): boolean {
    const name = this.cardData.holderName;

    if (isEmptyField(name)) {
      console.log(MSG_REQUIRED_FIELD);
      // update form err msg
      // add invalid_field class too input
      return false;
    } else if (name && isInvalidCardholder(name)) {
      console.log(MSG_WRONG_NAME);
      // update form err msg
      // add invalid_field class too input
      return false;
    }

    return true;
  }

  private checkCardNumber(): boolean {
    const { number } = this.cardData;

    if (isEmptyField(number)) {
      console.log(MSG_REQUIRED_FIELD);
      return false;
    } else if (number && isInvalidNumber(number)) {
      console.log(MSG_WRONG_NUMBER);
      return false;
    } else if (number && isInvalidLength(number, MAX_CARD_NUM_LENGTH)) {
      console.log(MSG_WRONG_LENGTH(MAX_CARD_NUM_LENGTH));
      return false;
    }

    return true;
  }

  private checkExpirationMonth(): boolean {
    const month = this.cardData.expirationMonth;

    if (isEmptyField(month)) {
      console.log(MSG_REQUIRED_FIELD);
      return false;
    } else if (month && isInvalidNumber(month)) {
      console.log(MSG_WRONG_NUMBER);
      return false;
    } else if (month && isInvalidMonth(month)) {
      console.log(MSG_WRONG_MONTH);
      return false;
    }

    return true;
  }

  private checkExpirationYear(): boolean {
    const year = this.cardData.expirationYear;

    if (isEmptyField(year)) {
      console.log(MSG_REQUIRED_FIELD);
      return false;
    } else if (year && isInvalidNumber(year)) {
      console.log(MSG_WRONG_NUMBER);
      return false;
    }

    return true;
  }

  private checkCardCvcCode(): boolean {
    const { cvc } = this.cardData;

    if (isEmptyField(cvc)) {
      console.log(MSG_REQUIRED_FIELD);
      return false;
    } else if (cvc && isInvalidNumber(cvc)) {
      console.log(MSG_WRONG_NUMBER);
      return false;
    } else if (cvc && isInvalidLength(cvc, MAX_CARD_CVC_LENGTH)) {
      console.log(MSG_WRONG_LENGTH(MAX_CARD_CVC_LENGTH));
      return false;
    }

    return true;
  }

  protected isValidForm(): boolean {
    const isValidName = this.checkCardholderName();
    const isValidNumber = this.checkCardNumber();
    const isValidMonth = this.checkExpirationMonth();
    const isValidYear = this.checkExpirationYear();
    const isValidCvc = this.checkCardCvcCode();

    return isValidName && isValidNumber && isValidMonth && isValidYear && isValidCvc;
  }

  // private setErrorMsg(): void {}
}
