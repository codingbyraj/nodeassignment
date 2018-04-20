const Sequelize = require('sequelize');
const db = new Sequelize('shopdb','root','root',{
    host:'localhost',
    dialect:'mysql'
});

const Vendor = db.define('vendor',{
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

const Product = db.define('product',{   
    name:{
        type:Sequelize.STRING
    },
    price:{
        type:Sequelize.FLOAT,
        defaultValue:0.0
    }
});

Product.belongsTo(Vendor);


const Cart = db.define('cart',{
    quantity:{
        type:Sequelize.INTEGER,
        defaultValue:1
    }
});

Cart.belongsTo(Vendor);
Cart.belongsTo(Product);

db.sync()
    .then(()=>console.log('database sync'))
    .catch((err)=>console.log(err))

module.exports = {
    Vendor, Product, Cart
}