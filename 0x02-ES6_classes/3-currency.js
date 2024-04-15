export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string!');
    }
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string!');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(codeValue) {
    if (typeof codeValue !== 'string') {
      throw new TypeError('code must be a string!');
    }
    this._code = codeValue;
  }

  get name() {
    return this._name;
  }

  set name(nameValue) {
    if (typeof nameValue !== 'string') {
      throw new TypeError('name must be a string!');
    }
    this._name = nameValue;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
