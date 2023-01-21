import FormValidation from './form-validator';

class CardService extends FormValidation {
  private form: HTMLFormElement | null =
    document.querySelector<HTMLFormElement>('#card-form');

  private confirmation: HTMLElement | null = document.querySelector<HTMLElement>(
    '.confirmation__container',
  );

  private continueBtn: HTMLButtonElement | null =
    document.querySelector<HTMLButtonElement>('#continue-btn');

  constructor() {
    super();
  }

  init(): void {
    this.form?.reset(); // Firefox leaves input value after reload

    this.form?.addEventListener('submit', (e) => {
      e.preventDefault();

      if (this.isValidForm()) {
        this.toggleFormView();
        console.dir(this.cardData); // Demo purpose only
      }
    });

    this.continueBtn?.addEventListener('click', () => {
      if (this.form) {
        this.form.reset();
        this.cardData.reset();
        this.cardView.update();
        this.toggleFormView();
      }
    });
  }

  private toggleFormView(): void {
    this.form?.classList.toggle('hidden');
    this.confirmation?.classList.toggle('hidden');
  }
}

const cardService = new CardService();
export default cardService;
