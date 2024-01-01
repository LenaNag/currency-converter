let usd = 3.94;
let eur = 4.36;
let amountElement = document.querySelector(".js-form__field-amount");
let currencyElement = document.querySelector(".js-form__field-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-form__result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "USD":
            result = amount / usd;
            break;
        case "EUR":
            result = amount / eur;
            break;
    }
    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
});