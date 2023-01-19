import { FormName } from './types';

const formatCardNumber = (cardNumber: string) => {};

class CardService {
  private form: HTMLFormElement;

  private confirmation: HTMLElement;

  private continueBtn: HTMLButtonElement;

  constructor() {
    this.form = document.querySelector('#card-form') as HTMLFormElement;
    this.confirmation = document.querySelector('.confirmation__container') as HTMLElement;
    this.continueBtn = document.querySelector('#continue-btn') as HTMLButtonElement;
  }

  init(): void {
    this.form.reset(); // Firefox leaves input after reload

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.toggleFormView();
    });

    this.continueBtn.addEventListener('click', () => {
      this.form.reset();
      this.toggleFormView();
    });
  }

  updateCardView(): void {}

  toggleFormView(): void {
    this.form.classList.toggle('hidden');
    this.confirmation.classList.toggle('hidden');
  }
}

// console.dir(this.form.elements.namedItem(FormName.CARDHOLDER));
// console.dir(this.form.elements.namedItem(FormName.CARD_NUM));
// console.dir(this.form.elements.namedItem(FormName.CARD_EXP_MONTH));
// console.dir(this.form.elements.namedItem(FormName.CARD_EXP_YEAR));
// console.dir(this.form.elements.namedItem(FormName.CARD_CVC));

const cardService = new CardService();
export default cardService;
