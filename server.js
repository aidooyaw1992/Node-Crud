const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
var multer = require('multer');

dotenv.config();

const port = process.env.PORT;

let dev_db_url = null;
let mongoDb = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDb, {useNewUrlParser:true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));// for parsing application/x-www-form-urlencoded

// app.use(multer({dest:'./uploads/', 
//     rename: function(fieldname, filename){
//         return filename;
//     },
// }).any());

const post = require('./routes/post.route'); // imports routes for the post
app.use('/posts', post);


app.listen(port, ()=> console.log('We are live on '+ port));

