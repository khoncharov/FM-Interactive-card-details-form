import cardData from './card-data';
import { cardView } from './card-view';
import {
  MAX_CARD_CVC_LENGTH,
  MAX_CARD_EXP_LENGTH,
  MAX_CARD_NUM_LENGTH,
  MAX_NAME_LENGTH,
} from './const';
import { FormInputId } from './types';
import {
  deleteSpaces,
  formatCardholderName,
  formatCardNumber,
  isNotEmptyStr,
  prependZero,
} from './utils';

export default class FormChangeHandler {
  protected cardholderInput: HTMLInputElement | null =
    document.querySelector<HTMLInputElement>(`#${FormInputId.CARDHOLDER}`);

  protected cardNumberInput: HTMLInputElement | null =
    document.querySelector<HTMLInputElement>(`#${FormInputId.CARD_NUM}`);

  protected cardExpMonthInput: HTMLInputElement | null =
    document.querySelector<HTMLInputElement>(`#${FormInputId.CARD_EXP_MONTH}`);

  protected cardExpYearInput: HTMLInputElement | null =
    document.querySelector<HTMLInputElement>(`#${FormInputId.CARD_EXP_YEAR}`);

  protected cardCvcInput: HTMLInputElement | null =
    document.querySelector<HTMLInputElement>(`#${FormInputId.CARD_CVC}`);

  protected cardData = cardData;

  protected cardView = cardView;

  constructor() {
    this.cardholderInput?.addEventListener('input', () => {
      if (this.cardholderInput) {
        if (isNotEmptyStr(this.cardholderInput.value)) {
          this.cardData.holderName = formatCardholderName(
            this.cardholderInput.value,
          ).slice(0, MAX_NAME_LENGTH);
          this.cardholderInput.value = this.cardData.holderName;
        } else {
          this.cardData.holderName = null;
        }
      }
      this.cardView.update();
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
          this.cardData.number = null;
        }
      }
      this.cardView.update();
    });

    this.cardExpMonthInput?.addEventListener('input', () => {
      if (this.cardExpMonthInput) {
        if (isNotEmptyStr(this.cardExpMonthInput.value)) {
          this.cardData.expirationMonth = deleteSpaces(
            this.cardExpMonthInput.value,
          ).slice(0, MAX_CARD_EXP_LENGTH);
          this.cardExpMonthInput.value = this.cardData.expirationMonth;
        } else {
          this.cardData.expirationMonth = null;
        }
      }
      this.cardView.update();
    });

    this.cardExpYearInput?.addEventListener('input', () => {
      if (this.cardExpYearInput) {
        if (isNotEmptyStr(this.cardExpYearInput.value)) {
          this.cardData.expirationYear = deleteSpaces(this.cardExpYearInput.value).slice(
            0,
            MAX_CARD_EXP_LENGTH,
          );
          this.cardExpYearInput.value = this.cardData.expirationYear;
        } else {
          this.cardData.expirationYear = null;
        }
      }
      this.cardView.update();
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
          this.cardData.cvc = null;
        }
      }
      this.cardView.update();
    });

    this.cardholderInput?.addEventListener('blur', () => {
      if (this.cardholderInput) {
        if (isNotEmptyStr(this.cardholderInput.value)) {
          this.cardData.holderName = this.cardholderInput.value.trim();
          this.cardholderInput.value = this.cardData.holderName;
        } else {
          this.cardData.expirationMonth = null;
        }
      }
      this.cardView.update();
    });

    this.cardExpMonthInput?.addEventListener('blur', () => {
      if (this.cardExpMonthInput) {
        if (isNotEmptyStr(this.cardExpMonthInput.value)) {
          this.cardData.expirationMonth = prependZero(this.cardExpMonthInput.value);
          this.cardExpMonthInput.value = this.cardData.expirationMonth;
        } else {
          this.cardData.expirationMonth = null;
        }
      }
      this.cardView.update();
    });

    this.cardExpYearInput?.addEventListener('blur', () => {
      if (this.cardExpYearInput) {
        if (isNotEmptyStr(this.cardExpYearInput.value)) {
          this.cardData.expirationYear = prependZero(this.cardExpYearInput.value);
          this.cardExpYearInput.value = this.cardData.expirationYear;
        } else {
          this.cardData.expirationYear = null;
        }
      }
      this.cardView.update();
    });
  }
}
