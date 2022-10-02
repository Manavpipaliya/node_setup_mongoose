// mongoose connectivity

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task_1', {




useUnifiedTopology: true,


}).then(() => {

    console.log("success");

}).catch((err)=>{
    console.log(err);


})




