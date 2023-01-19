import FormChangeHandler from './form-change-handler';

class CardService extends FormChangeHandler {
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
      this.toggleFormView();

      console.log(this.cardData);
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

  toggleFormView(): void {
    this.form?.classList.toggle('hidden');
    this.confirmation?.classList.toggle('hidden');
  }
}

const cardService = new CardService();
export default cardService;
