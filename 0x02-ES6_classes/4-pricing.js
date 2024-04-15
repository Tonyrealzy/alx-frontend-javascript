import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number!');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Invalid currency type!');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('amount must be a number!');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Invalid currency type!');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    const { code, name } = this.currency;
    return `${this.amount} ${name} (${code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number!');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number!');
    }
    return amount * conversionRate;
  }
}
