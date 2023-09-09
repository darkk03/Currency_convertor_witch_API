export function fetchExchangeRates() {
  return fetch("https://v6.exchangerate-api.com/v6/5b64bbff40ce85a30a771646/latest/USD")
    .then((response) => response.json())
}