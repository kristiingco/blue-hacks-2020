var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var cors = require('cors');
var db; // Create a database variable outside of the database connection callback to reuse the connection pool in your app.

var REGIONS_COLLECTION = "regions";
var ARTISANS_COLLECTION = "artisans";
var PRODUCTS_COLLECTION = "products";
var ARTISAN_PRODUCT_COLLECTION = "artisan_product";

var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

var distDir = __dirname + "/dist/";
 app.use(express.static(distDir));

app.use(cors({origin: '*'}));

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://bluehacks2020:teamsushi2020@ds161001.mlab.com:61001/heroku_p4hmmrts", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 4200, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

