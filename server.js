const express = require('express');
const path = require('path');
const app = express();

let routes = {
    product: require('./routes/api/product'),
    vendor: require('./routes/api/vendor')
};
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use('/api/product',routes.product);

app.use('/api/vendor',routes.vendor);

app.use('/',express.static(path.join(__dirname,'public')));

app.listen(1234);