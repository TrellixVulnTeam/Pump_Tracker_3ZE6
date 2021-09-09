

let utildb = require('./db_util');
const binance = require('./binance');


// client.ticker24hr().then(response => {


//     let lines = response.data;

//     fill(lines).then((result) => {

//         utildb.updateDB(Trackers);
//     });
// });




// 1) get list of all assets 

binance.getAssetList().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});;
//

    // client.logger.log(AssetUSDT.length);
    // client.logger.log(AssetBNB.length);
    // client.logger.log(AssetALL.length);

    // AssetUSDT.forEach(element => {
    //     client.logger.log(element.symbol);
    // });



// });




// 2) save data in database
// date symbol volume askQty
// binance.get24hVolume();
// 3)  calculate AVG Volume (3 last days)


// 4)  compare today volume with 3d AVG 


// 5) create alert 