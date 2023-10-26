const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dbms-proj",{

}).then(() => {
    console.log('connection successful');
}).catch((e) =>{
    console.log('no connection');
})
