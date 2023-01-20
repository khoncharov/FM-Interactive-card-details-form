import cardData from './card-data';
import { cardView } from './card-view';
import { FormInputId } from './types';
import { deleteSpaces, formatCardNumber, isNotEmptyStr } from './utils';

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
          this.cardData.holderName = this.cardholderInput.value;
        } else {
          this.cardData.holderName = null;
        }
      }
      this.cardView.update();
    });

    this.cardNumberInput?.addEventListener('input', () => {
      if (this.cardNumberInput) {
        if (isNotEmptyStr(this.cardNumberInput.value)) {
          this.cardData.number = deleteSpaces(this.cardNumberInput.value).slice(0, 16);
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
          this.cardData.expirationMonth = this.cardExpMonthInput.value;
        } else {
          this.cardData.expirationMonth = null;
        }
      }
      this.cardView.update();
    });

    this.cardExpYearInput?.addEventListener('input', () => {
      if (this.cardExpYearInput) {
        if (isNotEmptyStr(this.cardExpYearInput.value)) {
          this.cardData.expirationYear = this.cardExpYearInput.value;
        } else {
          this.cardData.expirationYear = null;
        }
      }
      this.cardView.update();
    });

    this.cardCvcInput?.addEventListener('input', () => {
      if (this.cardCvcInput) {
        if (isNotEmptyStr(this.cardCvcInput.value)) {
          this.cardData.cvc = this.cardCvcInput.value;
        } else {
          this.cardData.cvc = null;
        }
      }
      this.cardView.update();
    });
  }
}
