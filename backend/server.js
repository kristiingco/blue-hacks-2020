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
  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }

  /*  "/api/artisans"
   *    GET: returns all artisans
   *    Required Params: NONE
   */
  app.get("/api/artisans", function(req, res) {
    db.collection(ARTISANS_COLLECTION).find().toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get artisans.");
        } else {
            res.status(200).json(docs);
        }
    });
  });
  
  /*  "/api/artisanById"
   *    GET: returns an artisan from its artisan_id
   *    Required Params: 
   *    artisan_id=int
   */
  app.get("/api/artisanById", function(req, res) {
    var artisan_id = req.query.artisan_id;
    db.collection(ARTISANS_COLLECTION).find({artisan_id: artisan_id}).toArray(function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to get artisan.");
        } else {
            res.status(200).json(doc[0]);
        }
    });
  });

  /*  "/api/products"
   *    GET: returns all products
   *    Required Params: NONE
   */
  app.get("/api/products", function(req, res) {
    db.collection(PRODUCTS_COLLECTION).find().toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get products.");
        } else {
            res.status(200).json(docs);
        }
    });
  });

  /*  "/api/productById"
   *    GET: returns a product from its product_id
   *    Required Params: 
   *    product_id=int
   */
  app.get("/api/productById", function(req, res) {
    var product_id = req.query.product_id;
    db.collection(PRODUCTS_COLLECTION).find({product_id: product_id}).toArray(function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to get product.");
        } else {
            res.status(200).json(doc[0]);
        }
    });
  });

  /*  "/api/productByArtisan"
   *    GET: returns products that the artisan created
   *    Required Params: 
   *    artisan_id=int
   */
  app.get("/api/productByArtisan", function(req, res) {
    var artisan_id = req.query.artisan_id;
    db.collection(ARTISAN_PRODUCT_COLLECTION).find({artisan_id: artisan_id}).toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get artisan product keys.");
        } else {
            res.status(200).json(docs);
        }
    });
  });

const deepai = require('deepai');
deepai.setApiKey('8de794df-a945-49c8-8bc2-04d3b2fd7f60');

app.get("/api/compareImages", async function(req, res){
    var image1 = req.query.image1;
    var image2 = req.query.image2;
    try {
        var resp = await deepai.callStandardApi("image-similarity", {
            image1: image1,
            image2: image2,
          });
        res.status(200).json(resp);
    } catch (err) {
        handleError(res, err.message, "DeepAI Error");
    }
});

  /*  "/api/compareImageList"
   *    GET: returns the closest product to the image sent

   *    Required Params: 
   *    image = url string of user image sent
   *    image_list = list of url strings to be compared
   *    product_id_list = list of product ids 
   *    
   *    Return: JSON of {image_id:x, product_id:y, distance:z}
   * 
   *    NOTE:
   *    image_list and product_id_list must be same length
   *    image_list[0] must correspond to product_id_list[0] and so on
   */

app.get("/api/compareImageList", async function(req, res){
    var image = req.query.image;
    var imageList = req.query.image_list.split(',');
    var productIdList = req.query.product_id_list.split(',');
    var productList = new Object();
    productList.data = [];

    try {
        for(var i = 0; i < imageList.length; i++){
                var resp = await deepai.callStandardApi("image-similarity", {
                    image1: image,
                    image2: imageList[i],
                });
                productList["data"].push({image_id: imageList[i], product_id: productIdList[i], distance: resp.output.distance});
        }
        console.log(productList);
        productList["data"].sort(function(a, b){
            return a.distance - b.distance;
        });
        res.status(200).json(productList["data"][0]);
        
    }
    catch (err) {
        console.log("BYE");
        handleError(res, err.message, "DeepAI Error");
    }
});


