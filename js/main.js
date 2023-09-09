import { form, loader, resultFrom, resultTo, rateConversion, rateLast, fromSelect, toSelect } from "./variables.js";
import { fetchExchangeRates } from "./api.js";
import { populateCurrencyOptions } from "./ui.js";
import { performExchange } from "./exchange.js";

document.addEventListener("DOMContentLoaded", function () {
  fetchExchangeRates().then((data) => {
    const currencies = Object.keys(data.conversion_rates);

    populateCurrencyOptions(currencies, fromSelect, toSelect);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const amount = parseFloat(document.querySelector("#amount").value);
      const fromCurrency = fromSelect.value;
      const toCurrency = toSelect.value;

      const exchangeResult = performExchange(amount, fromCurrency, toCurrency, data);

      if (exchangeResult) {
        resultFrom.textContent = exchangeResult.amountFrom;
        resultTo.textContent = exchangeResult.amountTo;
        rateConversion.textContent = exchangeResult.rateConversion;
        rateLast.textContent = exchangeResult.rateLast;
      }
    });
  });
});
