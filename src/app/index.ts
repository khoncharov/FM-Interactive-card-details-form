import FormHandler from './form-handler';

class CardService extends FormHandler {
  constructor() {
    super();
  }

  init(): void {
    this.form?.reset(); // Firefox leaves input value after reload

    this.form?.addEventListener('submit', (e) => {
      e.preventDefault();

      if (this.cardData.isValidForm) {
        this.toggleFormView();
        this.cardData.formData.forEach((value, key) => {
          console.log(`${key}: ${value}`);
        }); // Demo purpose only
      }
    });

    this.continueBtn?.addEventListener('click', () => {
      if (this.form) {
        this.form.reset();
        this.cardData.reset();
        this.cardView.update(this.cardData);
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
