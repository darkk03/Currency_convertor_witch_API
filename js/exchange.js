export function performExchange(amount, fromCurrency, toCurrency, data) {

  const conversionRateFrom = data.conversion_rates[fromCurrency];
  const conversionRateTo = data.conversion_rates[toCurrency];

  if (conversionRateFrom && conversionRateTo) {
    const convertedAmount = (amount / conversionRateFrom) * conversionRateTo;
    return {
      amountFrom: `${amount} ${fromCurrency}`,
      amountTo: `${convertedAmount.toFixed(2)} ${toCurrency}`,
      rateConversion: `1 ${fromCurrency} = ${conversionRateFrom} ${toCurrency}`,
      rateLast: `Last update: ${data.time_last_update_utc}`,
    };
  } 
}
