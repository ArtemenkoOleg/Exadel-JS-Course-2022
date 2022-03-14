import fetch from 'node-fetch';

const url = 'https://api.currencyapi.com/v3/latest?apikey=SECRET'

/*
amount = value that we want to convert
currencyCodeFrom = string that represents code of currency from which we want to convert
currencyCodeTo = string that represents code of currency to which we want to convert
*/
function currencyConvertor(url, amount, currencyCodeFrom, currencyCodeTo) {
    return fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            const exchangeRateFrom = res['data'][currencyCodeFrom]['value'] 
            const exchangeRateTo = res['data'][currencyCodeTo]['value'] 
            console.log((amount / exchangeRateFrom) * exchangeRateTo)
        })
        .catch((err) => {
            console.log(err)
        })
}

currencyConvertor(url, 1, 'EUR', 'UZS')
currencyConvertor(url, 1, 'UAH', 'UZS')