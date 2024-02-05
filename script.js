document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
    const apiUrl = 'https://api.forexrateapi.com/v1/latest?api_key=f8ca005e7bbca56181ed8f79f93f49a0&base=USD&currencies=EUR,INR,JPY';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    const successElement = document.createElement('div');
    successElement.className = 'data-item';
    successElement.innerHTML = `<strong>Success</strong>: ${data.success}`;
    dataContainer.appendChild(successElement);

    if (data.success) {
        const baseCurrencyElement = document.createElement('div');
        baseCurrencyElement.className = 'data-item';
        baseCurrencyElement.innerHTML = `<strong>Base Currency</strong>: ${data.base}`;
        dataContainer.appendChild(baseCurrencyElement);

        const timestampElement = document.createElement('div');
        timestampElement.className = 'data-item';
        timestampElement.innerHTML = `<strong>Timestamp</strong>: ${data.timestamp}`;
        dataContainer.appendChild(timestampElement);

        const rates = data.rates;

        for (const currency in rates) {
            const rateElement = document.createElement('div');
            rateElement.className = 'data-item';
            rateElement.innerHTML = `<strong>${currency}</strong>: ${rates[currency]}`;
            dataContainer.appendChild(rateElement);
        }
    }
}
