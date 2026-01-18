const dotenv = require('dotenv');
dotenv.config();


const app = require('./app.js'); 
const { Port } = require('./config/config.js');

console.log("RZP KEY:", process.env.RAZORPAY_KEY_ID ? "LOADED" : "NOT LOADED");
app.listen(Port, () => {
  console.log(`Server running on Port ${Port}`);
});
