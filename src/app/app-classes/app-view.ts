import CardView from './card-view';
import { FormInputId } from '../types';

export default class AppView {
  protected form: HTMLFormElement | null;

  protected confirmation: HTMLElement | null;

  protected continueBtn: HTMLButtonElement | null;

  protected cardholderInput: HTMLInputElement | null;
  protected cardNumberInput: HTMLInputElement | null;
  protected cardExpMonthInput: HTMLInputElement | null;
  protected cardExpYearInput: HTMLInputElement | null;
  protected cardCvcInput: HTMLInputElement | null;

  protected cardView = new CardView();

  constructor() {
    this.form = document.querySelector<HTMLFormElement>('#card-form');
    this.confirmation = document.querySelector<HTMLElement>('.confirmation__container');
    this.continueBtn = document.querySelector<HTMLButtonElement>('#continue-btn');

    this.cardholderInput = document.querySelector<HTMLInputElement>(
      `#${FormInputId.CARDHOLDER}`,
    );
    this.cardNumberInput = document.querySelector<HTMLInputElement>(
      `#${FormInputId.CARD_NUM}`,
    );
    this.cardExpMonthInput = document.querySelector<HTMLInputElement>(
      `#${FormInputId.CARD_EXP_MONTH}`,
    );
    this.cardExpYearInput = document.querySelector<HTMLInputElement>(
      `#${FormInputId.CARD_EXP_YEAR}`,
    );
    this.cardCvcInput = document.querySelector<HTMLInputElement>(
      `#${FormInputId.CARD_CVC}`,
    );
  }
}
