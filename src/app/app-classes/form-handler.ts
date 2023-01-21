import AppView from './app-view';
import CardData from './card-data';
import {
  MAX_CARD_CVC_LENGTH,
  MAX_CARD_EXP_LENGTH,
  MAX_CARD_NUM_LENGTH,
  MAX_NAME_LENGTH,
} from '../const';
import {
  deleteSpaces,
  formatCardholderName,
  formatCardNumber,
  isNotEmptyStr,
  prependZero,
} from '../utils';

export default class FormHandler extends AppView {
  protected cardData = new CardData();

  constructor() {
    super();

    this.cardholderInput?.addEventListener('input', () => {
      if (this.cardholderInput) {
        if (isNotEmptyStr(this.cardholderInput.value)) {
          this.cardData.holderName = formatCardholderName(
            this.cardholderInput.value,
          ).slice(0, MAX_NAME_LENGTH);
          this.cardholderInput.value = this.cardData.holderName;
        } else {
          this.cardData.holderName = '';
        }
      }

      this.cardView.update(this.cardData);
    });

    this.cardNumberInput?.addEventListener('input', () => {
      if (this.cardNumberInput) {
        if (isNotEmptyStr(this.cardNumberInput.value)) {
          this.cardData.number = deleteSpaces(this.cardNumberInput.value).slice(
            0,
            MAX_CARD_NUM_LENGTH,
          );
          this.cardNumberInput.value = formatCardNumber(this.cardData.number);
        } else {
          this.cardData.number = '';
        }
      }
      this.cardView.update(this.cardData);
    });

    this.cardExpMonthInput?.addEventListener('input', () => {
      if (this.cardExpMonthInput) {
        if (isNotEmptyStr(this.cardExpMonthInput.value)) {
          this.cardData.expMonth = deleteSpaces(this.cardExpMonthInput.value).slice(
            0,
            MAX_CARD_EXP_LENGTH,
          );
          this.cardExpMonthInput.value = this.cardData.expMonth;
        } else {
          this.cardData.expMonth = '';
        }
      }
      this.cardView.update(this.cardData);
    });

    this.cardExpYearInput?.addEventListener('input', () => {
      if (this.cardExpYearInput) {
        if (isNotEmptyStr(this.cardExpYearInput.value)) {
          this.cardData.expYear = deleteSpaces(this.cardExpYearInput.value).slice(
            0,
            MAX_CARD_EXP_LENGTH,
          );
          this.cardExpYearInput.value = this.cardData.expYear;
        } else {
          this.cardData.expYear = '';
        }
      }
      this.cardView.update(this.cardData);
    });

    this.cardCvcInput?.addEventListener('input', () => {
      if (this.cardCvcInput) {
        if (isNotEmptyStr(this.cardCvcInput.value)) {
          this.cardData.cvc = deleteSpaces(this.cardCvcInput.value).slice(
            0,
            MAX_CARD_CVC_LENGTH,
          );
          this.cardCvcInput.value = this.cardData.cvc;
        } else {
          this.cardData.cvc = '';
        }
      }
      this.cardView.update(this.cardData);
    });

    this.cardholderInput?.addEventListener('blur', () => {
      if (this.cardholderInput) {
        if (isNotEmptyStr(this.cardholderInput.value)) {
          this.cardData.holderName = this.cardholderInput.value.trim();
          this.cardholderInput.value = this.cardData.holderName;
        } else {
          this.cardData.expMonth = '';
        }
      }
      this.cardView.update(this.cardData);
    });

    this.cardExpMonthInput?.addEventListener('blur', () => {
      if (this.cardExpMonthInput) {
        if (isNotEmptyStr(this.cardExpMonthInput.value)) {
          this.cardData.expMonth = prependZero(this.cardExpMonthInput.value);
          this.cardExpMonthInput.value = this.cardData.expMonth;
        } else {
          this.cardData.expMonth = '';
        }
      }
      this.cardView.update(this.cardData);
    });

    this.cardExpYearInput?.addEventListener('blur', () => {
      if (this.cardExpYearInput) {
        if (isNotEmptyStr(this.cardExpYearInput.value)) {
          this.cardData.expYear = prependZero(this.cardExpYearInput.value);
          this.cardExpYearInput.value = this.cardData.expYear;
        } else {
          this.cardData.expYear = '';
        }
      }
      this.cardView.update(this.cardData);
    });
  }
}
