var fs = require('fs');  
var Table = require('easy-table')

module.exports=(function()
{
  function New(req,res)
  {
  }
  New.prototype.findallasen=
    
    function(req,res)
   {
    fs.readFile('source.json','utf-8', function(err, data) {
  console.log(data);

  var currentPackage = JSON.parse(data);
  var t = new Table
  currentPackage.students.forEach(function(students) {
  t.cell('id', students.id)
  
  t.cell('fname', students.fName)
  
  t.cell('lname', students.lName)
  
   t.cell('score', students.score)
  t.newRow() 
    })
    res.end(t.toString());
     })
          

   };


    New.prototype.findalldes=
    
    function(req,res)
   {
    fs.readFile('source.json','utf-8', function(err, data) {
  console.log(data);

  var currentPackage = JSON.parse(data);
  var t = new Table
  currentPackage.students.forEach(function(students) {
  t.cell('id', students.id)
  
  t.cell('fname', students.fName)
  
  t.cell('lname', students.lName)
  
   t.cell('score', students.score)
  t.newRow() 
    })
    var t1=t.sort(['score|des']);
res.end(t1.toString());
   // res.send(t.toString());
     })
          

   };

return New;


})();
