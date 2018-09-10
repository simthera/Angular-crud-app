var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./config/DB')
coinRoutes = require('./expressRoutes/employeeRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/employees', coinRoutes);

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});


// var app = express()
// app.use(bodyParser());
// app.use(bodyParser.json({limit:'5mb'}));
// app.use(bodyParser.urlencoded({extended:true}));


// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

// var Schema = mongo.Schema;

// var UsersSchema = new Schema({
//     name: { type: String   },
//     address: { type: String   },
// },{ versionKey: false });


// var model = mongo.model('users', UsersSchema, 'users');

// app.post("/api/SaveUser",function(req,res){
//     var mod = new model(req.body);
//     if(req.body.mode =="Save")
//     {
//         mod.save(function(err,data){
//             if(err){
//                 res.send(err);
//             }
//             else{
//                 res.send({data:"Record has been Inserted..!!"});
//             }
//         });
//     }
//     else
//     {
//         model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address},
//             function(err,data) {
//                 if (err) {
//                     res.send(err);
//                 }
//                 else{
//                     res.send({data:"Record has been Updated..!!"});
//                 }
//             });


//     }
// });

// app.post("/api/deleteUser",function(req,res){
//     model.remove({ _id: req.body.id }, function(err) {
//         if(err){
//             res.send(err);
//         }
//         else{
//             res.send({data:"Record has been Deleted..!!"});
//         }
//     });
// });



// app.get("/api/getUser",function(req,res){
//     model.find({},function(err,data){
//         if(err){
//             res.send(err);
//         }
//         else{
//             res.send(data);
//         }
//     });
// });


// app.listen(8080, function () {

//     console.log('Example app listening on port 8080!')
// });