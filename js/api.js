export function fetchExchangeRates() {
  return fetch("https://v6.exchangerate-api.com/v6/  Your API Here  /latest/USD")
    .then((response) => response.json())
}
