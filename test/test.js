const nock = require('nock')
const assert = require('chai').assert;
const ApiCrypto = require('../ApiCrypto.js')
const axios = require('axios')

const apiCrypto = new ApiCrypto();

describe('Testes de código 200', function(){
    it("Teste método coinList", async function(){
        
        nock('https://rest.coinapi.io', {
            reqheaders:{'X-CoinAPI-Key': '6C072847-7343-42DD-8682-E7E604FE942A'}
        }).get('/v1/symbols/').reply(200, "Requisição bem sucedida")
        
        var response = await apiCrypto.coinList();

        assert.equal(response.status, 200)
    })

    it("Teste método exchangeList", async function(){
        
        nock('https://rest.coinapi.io', {
            reqheaders:{'X-CoinAPI-Key': '6C072847-7343-42DD-8682-E7E604FE942A'}
        }).get('/v1/exchanges').reply(200, "Requisição bem sucedida")
        
        var response = await apiCrypto.exchangeList();
        assert.equal(response.status, 200)
    })

    it("Teste método historicalData", async function(){
        
        nock('https://rest.coinapi.io', {
            reqheaders:{'X-CoinAPI-Key': '6C072847-7343-42DD-8682-E7E604FE942A'}
        }).get('/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00').reply(200, "Requisição bem sucedida")
        
        var response = await apiCrypto.historicalData();

        assert.equal(response.status, 200);
    })

})

describe('Testes de código 404', function(){
    it("Teste método coinList", async function(){
        
        nock('https://rest.coinapi.io', {
            reqheaders:{'X-CoinAPI-Key': '6C072847-7343-42DD-8682-E7E604FE942A'}
        }).get('/v1/symbols/').reply(404, "Código 404")
        
        var response = await apiCrypto.coinList();

        
    })

    it("Teste método exchangeList", async function(){
        
        nock('https://rest.coinapi.io', {
            reqheaders:{'X-CoinAPI-Key': '6C072847-7343-42DD-8682-E7E604FE942A'}
        }).get('/v1/exchanges').reply(404, "Código 404")
        
        var response = await apiCrypto.exchangeList();
        
    })

    it("Teste método historicalData", async function(){
        
        nock('https://rest.coinapi.io', {
            reqheaders:{'X-CoinAPI-Key': '6C072847-7343-42DD-8682-E7E604FE942A'}
        }).get('/v1/quotes/BITSTAMP_SPOT_BTC_USD/history?time_start=2016-01-01T00:00:00').reply(404, "Código 404")
        
        var response = await apiCrypto.historicalData();

    })

})