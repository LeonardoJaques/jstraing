class Util {
  static #defaultFormat = Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  });
  static formatCurrency(value) {
    return this.#defaultFormat.format(value);
  }
  static unformatCurrency(value) {
    //1000.10
    return Number(value.replace(/\D/g, '')) / 100;
  }
}
module.exports = Util;
