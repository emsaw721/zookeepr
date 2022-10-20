const express = require('express')
const PORT = process.env.PORT || 3001
const app = express(); 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes'); 

//parse incoming string or array data 
app.use(express.urlencoded({ extended: true}));
//parse incoming json data
app.use(express.json()); 
// anytime client navigates to <host>/api, app will use router in apiRoutes
app.use('./api', apiRoutes)
// if '/' is endpoint, router serves back HTML routes. 
app.use('/', htmlRoutes)

app.use(express.static('public')); 
const { animals } = require('./data/animals');

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
}); 



