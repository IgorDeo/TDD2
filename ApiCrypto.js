const axios = require('axios')

module.exports = class ApiCrypto{

    async coinList(){
        return axios({
            method: 'get',
            url: 'https://rest.coinapi.io/v1/symbols/',
            headers: {'X-CoinAPI-Key': '6C072847-7343-42DD-8682-E7E604FE942A'}
        }).catch(erro => {
            console.log("");})
    }

    async exchangeList(){
        return axios({
            method: 'get',
            url: 'https://rest.coinapi.io/v1/exchanges',
            headers: {'X-CoinAPI-Key': '6C072847-7343-42DD-8682-E7E604FE942A'}
        }).catch(erro => {
            console.log("");})
    }

    async historicalData(){
        return axios({
            method: 'get',
            url: 'https://rest.coinapi.io/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00',
            headers: {'X-CoinAPI-Key': '6C072847-7343-42DD-8682-E7E604FE942A'}
        }).catch(erro => {
            console.log("");
        })
    }
}

