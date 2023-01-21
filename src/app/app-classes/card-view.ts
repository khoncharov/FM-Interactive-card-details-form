import CardData from './card-data';
import {
  DEFAULT_CARDHOLDER,
  DEFAULT_CARD_CVC,
  DEFAULT_CARD_EXP_MONTH,
  DEFAULT_CARD_EXP_YEAR,
  DEFAULT_CARD_NUMBER,
} from '../const';
import { CardViewClassName } from '../types';
import { formatCardNumber } from '../utils';

export default class CardView {
  protected cardholder: HTMLParagraphElement | null =
    document.querySelector<HTMLParagraphElement>(`.${CardViewClassName.CARDHOLDER}`);

  protected cardNumber: HTMLParagraphElement | null =
    document.querySelector<HTMLParagraphElement>(`.${CardViewClassName.CARD_NUM}`);

  protected cardExpDate: HTMLParagraphElement | null =
    document.querySelector<HTMLParagraphElement>(`.${CardViewClassName.CARD_EXP_DATE}`);

  protected cardCvc: HTMLParagraphElement | null =
    document.querySelector<HTMLParagraphElement>(`.${CardViewClassName.CARD_CVC}`);

  update(data: CardData): void {
    if (this.cardholder) {
      if (data.holderName) {
        this.cardholder.textContent = data.holderName;
      } else {
        this.cardholder.textContent = DEFAULT_CARDHOLDER;
      }
    }

    if (this.cardNumber) {
      if (data.number) {
        this.cardNumber.textContent = formatCardNumber(data.number);
      } else {
        this.cardNumber.textContent = DEFAULT_CARD_NUMBER;
      }
    }

    if (this.cardExpDate) {
      const expirationDate = [DEFAULT_CARD_EXP_MONTH, DEFAULT_CARD_EXP_YEAR];
      if (data.expMonth) {
        expirationDate[0] = data.expMonth;
      }
      if (data.expYear) {
        expirationDate[1] = data.expYear;
      }
      this.cardExpDate.textContent = expirationDate.join('/');
    }

    if (this.cardCvc) {
      if (data.cvc) {
        this.cardCvc.textContent = data.cvc;
      } else {
        this.cardCvc.textContent = DEFAULT_CARD_CVC;
      }
    }
  }
}
