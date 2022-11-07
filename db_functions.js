const { find } = require('lodash');
var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/NodeAppDatabase";
class database {
    constructor(db, collection) {
        this.dbo = db.db("NodeAppDatabase");
        this.collection = dbo.collection("students");
    }
    fun_find(obj) {
        MongoClient.connect(url,
            function (err) {
                return this.collection.find(obj);
            });
    }

}
MongoClient.connect(url,
    function (err, db) {
        if (err) throw err;
        let dbo = db.db("NodeAppDatabase");
        let results = dbo.collection("students").find({});
    }
);