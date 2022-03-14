import fetch from 'node-fetch';

const url = 'https://api.currencyapi.com/v3/latest?apikey=SECRET'

/*
amount = value that we want to convert
currencyCodeFrom = string that represents code of currency from which we want to convert
currencyCodeTo = string that represents code of currency to which we want to convert
*/
async function currencyConvertorAsync(url, amount, currencyCodeFrom, currencyCodeTo) {
    try {
        const fetchedData = await fetch(url)
        const result = await fetchedData.json()

        const exchangeRateFrom = await result['data'][currencyCodeFrom]['value'] 
        const exchangeRateTo = await result['data'][currencyCodeTo]['value'] 
                
        return (amount / exchangeRateFrom) * exchangeRateTo
    } catch(err) {
        console.log(err)
    }
}

console.log(await currencyConvertorAsync(url, 1, 'EUR', 'UZS'))
console.log(await currencyConvertorAsync(url, 1, 'UAH', 'UZS'))