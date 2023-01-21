import AppView from './app-view';
import CardData from './card-data';
import {
  INVALID_INPUT_CLASS,
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

    this.cardholderInput?.addEventListener('blur', () => {
      if (this.cardholderInput && this.cardholderErrField) {
        if (!this.cardData.isValidHolderName) {
          this.cardholderInput.classList.add(INVALID_INPUT_CLASS);
          this.cardholderInput.setAttribute('aria-invalid', 'true');

          this.cardholderErrField.textContent = this.cardData.holderNameErrMsg;
        } else {
          this.cardholderInput.classList.remove(INVALID_INPUT_CLASS);
          this.cardholderInput.setAttribute('aria-invalid', 'false');

          this.cardholderErrField.textContent = '';
        }
      }
    });

    this.cardNumberInput?.addEventListener('blur', () => {
      if (this.cardNumberInput && this.cardNumberErrField) {
        if (!this.cardData.isValidNumber) {
          this.cardNumberInput.classList.add(INVALID_INPUT_CLASS);
          this.cardNumberInput.setAttribute('aria-invalid', 'true');

          this.cardNumberErrField.textContent = this.cardData.numberErrMsg;
        } else {
          this.cardNumberInput.classList.remove(INVALID_INPUT_CLASS);
          this.cardNumberInput.setAttribute('aria-invalid', 'false');

          this.cardNumberErrField.textContent = '';
        }
      }
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

      if (this.cardExpMonthInput && this.cardExpDateErrField) {
        if (!this.cardData.isValidExpMonth) {
          this.cardExpMonthInput.classList.add(INVALID_INPUT_CLASS);
          this.cardExpMonthInput.setAttribute('aria-invalid', 'true');

          this.cardExpDateErrField.textContent = this.cardData.expMonthErrMsg;
        } else {
          this.cardExpMonthInput.classList.remove(INVALID_INPUT_CLASS);
          this.cardExpMonthInput.setAttribute('aria-invalid', 'false');

          if (this.cardData.expYearErrMsg) {
            this.cardExpDateErrField.textContent = this.cardData.expYearErrMsg;
          } else {
            this.cardExpDateErrField.textContent = '';
          }
        }
      }
    });

    this.cardExpYearInput?.addEventListener('blur', () => {
      if (this.cardExpYearInput) {
        if (isNotEmptyStr(this.cardExpYearInput.value)) {
          this.cardData.expYear = this.cardExpYearInput.value;
          this.cardExpYearInput.value = this.cardData.expYear;
        } else {
          this.cardData.expYear = '';
        }
      }
      this.cardView.update(this.cardData);

      if (this.cardExpYearInput && this.cardExpDateErrField) {
        if (!this.cardData.isValidExpYear) {
          this.cardExpYearInput.classList.add(INVALID_INPUT_CLASS);
          this.cardExpYearInput.setAttribute('aria-invalid', 'true');

          if (!this.cardData.expMonthErrMsg) {
            this.cardExpDateErrField.textContent = this.cardData.expYearErrMsg;
          }
        } else {
          this.cardExpYearInput.classList.remove(INVALID_INPUT_CLASS);
          this.cardExpYearInput.setAttribute('aria-invalid', 'false');

          if (!this.cardData.expMonthErrMsg) {
            this.cardExpDateErrField.textContent = '';
          }
        }
      }
    });

    this.cardCvcInput?.addEventListener('blur', () => {
      if (this.cardCvcInput && this.cardCvcErrField) {
        if (!this.cardData.isValidCvc) {
          this.cardCvcInput.classList.add(INVALID_INPUT_CLASS);
          this.cardCvcInput.setAttribute('aria-invalid', 'true');

          this.cardCvcErrField.textContent = this.cardData.cvcErrMsg;
        } else {
          this.cardCvcInput.classList.remove(INVALID_INPUT_CLASS);
          this.cardCvcInput.setAttribute('aria-invalid', 'false');

          this.cardCvcErrField.textContent = '';
        }
      }
    });
  }

  markFirstEmptyInput(): void {
    if (
      this.cardData.holderNameErrMsg &&
      this.cardholderInput &&
      this.cardholderErrField
    ) {
      this.cardholderInput.classList.add(INVALID_INPUT_CLASS);
      this.cardholderInput.setAttribute('aria-invalid', 'true');
      this.cardholderErrField.textContent = this.cardData.holderNameErrMsg;
    }

    if (this.cardData.numberErrMsg && this.cardNumberInput && this.cardNumberErrField) {
      this.cardNumberInput.classList.add(INVALID_INPUT_CLASS);
      this.cardNumberInput.setAttribute('aria-invalid', 'true');
      this.cardNumberErrField.textContent = this.cardData.numberErrMsg;
    }

    if (
      this.cardData.expMonthErrMsg &&
      this.cardExpMonthInput &&
      this.cardExpDateErrField
    ) {
      this.cardExpMonthInput.classList.add(INVALID_INPUT_CLASS);
      this.cardExpMonthInput.setAttribute('aria-invalid', 'true');
      this.cardExpDateErrField.textContent = this.cardData.expMonthErrMsg;
    }

    if (
      this.cardData.expYearErrMsg &&
      this.cardExpYearInput &&
      this.cardExpDateErrField
    ) {
      this.cardExpYearInput.classList.add(INVALID_INPUT_CLASS);
      this.cardExpYearInput.setAttribute('aria-invalid', 'true');
      this.cardExpDateErrField.textContent = this.cardData.expYearErrMsg;
    }

    if (this.cardData.cvcErrMsg && this.cardCvcInput && this.cardCvcErrField) {
      this.cardCvcInput.classList.add(INVALID_INPUT_CLASS);
      this.cardCvcInput.setAttribute('aria-invalid', 'true');
      this.cardCvcErrField.textContent = this.cardData.cvcErrMsg;
    }
  }
}
