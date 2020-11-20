const fetchCrypto = async (symbol, apiKey, currency = 'USD') => {
    return await fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${symbol}&market=${currency}&apikey=${apiKey}`).then(res => res.json());
}


(async ()=> {
    console.log(await fetchCrypto('BTC', 'TUTBF3A8SG23ZWCJ', 'NOK'))
})()