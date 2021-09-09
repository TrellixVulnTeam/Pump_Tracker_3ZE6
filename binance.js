const { Spot } = require('@binance/connector');
let utildb = require('./db_util');
const apiKey = 'FwAG9TbAfIlgah9jBrZAsmiwMTXfHVmimm0aKibHqt7c488rjr9BhK461CeTC3MO';
const apiSecret = 'qqH5j4Jjd1Bpz0gyW6yXT1zYxEB2DYy64vCt0mlhgcKSF6J48h0arbem615Dm4eG';
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://api1.binance.com' });
const AssetUSDT = new Array();
const AssetBNB = new Array();
const AssetALL = new Array();
const Trackers = new Array();
let Tracker = {};




function get24hVolume() {
    client.ticker24hr().then(response => {


        let lines = response.data;

        utildb.fill(lines).then((result) => {

            utildb.updateDB(Trackers);
        });
    });
}

async function getAssetList() {

    client.exchangeInfo().then(response => {

        let assets = response.data.symbols;

        assets.forEach(element => {
            AssetALL.push(element);
            if (element.quoteAsset === 'USDT') {

                AssetUSDT.push(element);


            }
            else if (element.quoteAsset === 'BNB') {
                AssetBNB.push(element);
            }

        });

    });

    return AssetUSDT;
}

module.exports.get24hVolume = get24hVolume;
module.exports.getAssetList = getAssetList;