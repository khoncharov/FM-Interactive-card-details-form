import cardData from './card-data';
import {
  DEFAULT_CARDHOLDER,
  DEFAULT_CARD_CVC,
  DEFAULT_CARD_EXP_MONTH,
  DEFAULT_CARD_EXP_YEAR,
  DEFAULT_CARD_NUMBER,
} from './const';
import { CardViewClassName } from './types';
import { formatCardNumber } from './utils';

class CardView {
  protected cardholder: HTMLParagraphElement | null =
    document.querySelector<HTMLParagraphElement>(`.${CardViewClassName.CARDHOLDER}`);

  protected cardNumber: HTMLParagraphElement | null =
    document.querySelector<HTMLParagraphElement>(`.${CardViewClassName.CARD_NUM}`);

  protected cardExpDate: HTMLParagraphElement | null =
    document.querySelector<HTMLParagraphElement>(`.${CardViewClassName.CARD_EXP_DATE}`);

  protected cardCvc: HTMLParagraphElement | null =
    document.querySelector<HTMLParagraphElement>(`.${CardViewClassName.CARD_CVC}`);

  protected card = cardData;

  update(): void {
    if (this.cardholder) {
      if (this.card.holderName) {
        this.cardholder.textContent = this.card.holderName;
      } else {
        this.cardholder.textContent = DEFAULT_CARDHOLDER;
      }
    }

    if (this.cardNumber) {
      if (this.card.number) {
        this.cardNumber.textContent = formatCardNumber(this.card.number);
      } else {
        this.cardNumber.textContent = DEFAULT_CARD_NUMBER;
      }
    }

    if (this.cardExpDate) {
      const expirationDate = [DEFAULT_CARD_EXP_MONTH, DEFAULT_CARD_EXP_YEAR];
      if (this.card.expirationMonth) {
        expirationDate[0] = this.card.expirationMonth;
      }
      if (this.card.expirationYear) {
        expirationDate[1] = this.card.expirationYear;
      }
      this.cardExpDate.textContent = expirationDate.join('/');
    }

    if (this.cardCvc) {
      if (this.card.cvc) {
        this.cardCvc.textContent = this.card.cvc;
      } else {
        this.cardCvc.textContent = DEFAULT_CARD_CVC;
      }
    }
  }
}

export const cardView = new CardView();
