class CardData {
  holderName: string | null = null;
  number: string | null = null;
  expirationMonth: string | null = null;
  expirationYear: string | null = null;
  cvc: string | null = null;

  reset(): void {
    this.holderName = null;
    this.number = null;
    this.expirationMonth = null;
    this.expirationYear = null;
    this.cvc = null;
  }
}

const cardData = new CardData();
export default cardData;
