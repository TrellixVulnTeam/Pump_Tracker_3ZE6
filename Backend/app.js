

let utildb = require('./db_util');
const binance = require('./binance');





// 1) save data in database
// date symbol volume askQty
binance.get24hVolume();


// 3)  calculate AVG Volume (3 last days)


// 4)  compare today volume with 3d AVG 


// 5) create alert 