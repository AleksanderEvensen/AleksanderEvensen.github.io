const fetchCrypto = async (symbol, apiKey, currency = 'USD') => {
    let URLPath = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${symbol}&market=${currency}&apikey=${apiKey}`;
    console.log(URLPath);
    return await fetch(URLPath).then(res => res.json());
}


(async ()=> {
    // console.log("Bitcoin\n\n")
    // console.log(JSON.stringify(await fetchCrypto('BTC', 'TUTBF3A8SG23ZWCJ', 'NOK'), null, 4))
    // console.log("\n\nEtherum\n\n")
    // console.log(JSON.stringify(await fetchCrypto('ETH', 'TUTBF3A8SG23ZWCJ', 'NOK'), null, 4))
    // console.log("\n\nLitecoin\n\n")
    // console.log(JSON.stringify(await fetchCrypto('LTC', 'TUTBF3A8SG23ZWCJ', 'NOK'), null, 4))
    // console.log("\n\nXRP\n\n")
    // console.log(JSON.stringify(await fetchCrypto('XRP', 'TUTBF3A8SG23ZWCJ', 'NOK'), null, 4))
})()


