"use strict";
module.exports=function(app)
{  var newcon=require('../controller/controller.js');
   var new1=new newcon;
   console.log(newcon);
   app.get('/asending',new1.findallasen);
   app.get('/desending',new1.findalldes);
  
};


