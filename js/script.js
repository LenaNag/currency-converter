{
    const calculateResult = (amount, currency) => {
        const usd = 3.94;
        const eur = 4.36;

        switch (currency) {
            case "USD":
                return amount / usd;

            case "EUR":
                return amount / eur;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-form__result");
        resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-form__field-amount");
        const currencyElement = document.querySelector(".js-form__field-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);
        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}