var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const today = new Date().toLocaleDateString();
const AssetUSDT = new Array();
const AssetBNB = new Array();
const AssetALL = new Array();
const Trackers = new Array();
let Tracker = {};


function updateDB(myobj) {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Crypto");
        //   
        dbo.collection("Tracker").insertMany(myobj, function (err, res) {
            if (err) throw err;
            console.log("Number of lines inserted: " + res.insertedCount);
            db.close();
        });
    });
}


async function fill(lines) {
    lines.forEach((element) => {
        if (element.symbol.includes("USDT")) {
            Tracker.date = today;
            Tracker.Symbol = element.symbol;
            Tracker.volume = element.volume;
            Tracker.askQty = element.askQty;

            Trackers.push(Tracker);
            Tracker = {};

        }
    });
    return Trackers;

}



module.exports.updateDB = updateDB;
module.exports.fill = fill;