{
    const usd = 3.94;
    const eur = 4.36;
    const amountElement = document.querySelector(".js-form__field-amount");
    const currencyElement = document.querySelector(".js-form__field-currency");
    const formElement = document.querySelector(".js-form");
    const resultElement = document.querySelector(".js-form__result");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = +amountElement.value;
        const currency = currencyElement.value;
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
}