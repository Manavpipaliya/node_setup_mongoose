// set up node app

const express = require('express');

const app = express();




port = process.env.PORT || 5454;
app.get('/', (req, res) => {
    res.send("hello Manav ").sendStatus(200);
});





app.listen(port ,()=>{
    console.log(`server is running on port ${port}`);

})




