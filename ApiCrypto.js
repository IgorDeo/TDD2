const axios = require('axios')

module.exports = class ApiCrypto{


    async coinList(){
        await axios({
            method: 'get',
            url: 'https://rest.coinapi.io/v1/symbols/',
            headers: {'X-CoinAPI-Key': '6C072847-7343-42DD-8682-E7E604FE942A'}
        })
    }

    async exchangeList(){
        await axios({
            method: 'get',
            url: 'https://rest.coinapi.io/v1/exchanges',
            headers: {'X-CoinAPI-Key': '6C072847-7343-42DD-8682-E7E604FE942A'}
        }).then(res => console.log(res)).catch((error) => console.log(error))
    }

    async historicalData(){
        await axios({
            method: 'get',
            url: 'https://rest.coinapi.io/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00',
            headers: {'X-CoinAPI-Key': '6C072847-7343-42DD-8682-E7E604FE942A'}
        }).then(res => console.log(res)).catch((error) => console.log(error))
    }
}

