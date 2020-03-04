const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000;
const path = require('path');
const app = express();

const Users = require('./routes/Users');
const adminRouter = require('./routes/admin');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern', {useNewUrlParser:true});
// mongoose.connect("mongodb+srv://chukwiz:bmamarcus@csm-dl1cm.mongodb.net/test?retryWrites=true&w=majority");

app.use(cors({
    origin: process.env.ALLOW_ORIGIN,
    credentials: true,
    allowedHeaders: 'X-Requested-With, Content-Type, Authorization',
    methods: 'GET, POST, PATCH, PUT, POST, DELETE, OPTIONS'
  }));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended:false
// }))


app.use('/users',Users)
// app.use(/^\/(?!admin).*/, express.urlencoded({ extended: false }));
// app.use('/admin',adminRouter);

if(process.env.NODE_ENV === "production"){
    app.disable('x-powered-by')
    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname, 'client','build','index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})