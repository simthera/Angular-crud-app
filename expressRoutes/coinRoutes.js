var express = require('express');
var app = express();
var EmployeeRoutes = express.Router();

// Require Item model in our routes module
var Employee = require('../models/employee');

// Defined store route
EmployeeRoutes.route('/add').post(function (req, res) {
  var Employee = new Employee(req.body);
  Employee.save()
    .then(item => {
    res.status(200).json({'employee': 'employee added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
EmployeeRoutes.route('/').get(function (req, res) {
    Employee.find(function (err, Employee){
    if(err){
      console.log(err);
    }
    else {
      res.json(Employee);
    }
  });
});

// Defined edit route
EmployeeRoutes.route('/edit/:id').get(function (req, res) {
    var id = req.params.id;
    Employee.findById(id, function (err, employee){
        res.json(employee);
    });
  });

  //  Defined update route
  EmployeeRoutes.route('/update/:id').post(function (req, res) {
    Employee.findById(req.params.id, function(err, Employee) {
     if (!Employee)
       return next(new Error('Could not load Document'));
     else {
        employee.name = req.body.name;
        employee.age = req.body.age;
        employee.id = req.body.id;
 
       employee.save().then(employee => {
           res.json('Update complete');
       })
       .catch(err => {
             res.status(400).send("unable to update the database");
       });
     }
   });
 });
  
 // Defined delete | remove | destroy route
EmployeeRoutes.route('/delete/:id').get(function (req, res) {
    Employee.findByIdAndRemove({_id: req.params.id}, function(err, employee){
         if(err) res.json(err);
         else res.json('Successfully removed');
     });
 });
 
 module.exports = EmployeeRoutes;