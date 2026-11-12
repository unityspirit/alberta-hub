/**
 * Alberta Shirani International Academy — Currency & Multilingual Engine
 */

const AlbertaCurrency = {
  current: 'USD',
  rates: {
    USD: 1,
    RUB: 95,
    EUR: 0.92,
    USDT: 1
  },
  symbols: {
    USD: '$',
    RUB: '₽',
    EUR: '€',
    USDT: '₮'
  },

  setCurrency(curr) {
    if (!this.rates[curr]) return;
    this.current = curr;
    localStorage.setItem('alberta_currency', curr);
    this.updateAllPrices();
  },

  format(baseUSD) {
    const rate = this.rates[this.current] || 1;
    const converted = Math.round(baseUSD * rate);
    const sym = this.symbols[this.current];

    if (this.current === 'RUB') {
      return `${converted.toLocaleString('ru-RU')} ${sym}`;
    } else if (this.current === 'EUR') {
      return `${converted.toLocaleString('de-DE')} ${sym}`;
    } else {
      return `${sym}${converted.toLocaleString('en-US')}`;
    }
  },

  updateAllPrices() {
    document.querySelectorAll('[data-price-usd]').forEach(el => {
      const usdVal = parseFloat(el.getAttribute('data-price-usd'));
      if (!isNaN(usdVal)) {
        el.innerText = this.format(usdVal);
      }
    });

    // Fire event for any live calculators
    window.dispatchEvent(new CustomEvent('alberta-currency-changed', { detail: { currency: this.current } }));
  },

  init() {
    const saved = localStorage.getItem('alberta_currency');
    if (saved && this.rates[saved]) {
      this.current = saved;
      const select = document.getElementById('currencySelector');
      if (select) select.value = saved;
    }
    this.updateAllPrices();
  }
};

window.addEventListener('DOMContentLoaded', () => {
  AlbertaCurrency.init();
});
