const express = require('express')
const foodRoutes= require('./routes/foodRoutes')
const restaurentRoutes=require('./routes/restaurentRoutes')
const userRoutes=require('./routes/userRoutes')
const cartRoutes= require('./routes/cartRoutes')
const authRoutes=require('./routes/authRoutes')
const adminRoutes=require('./routes/adminRoutes')
const roleRoutes=require('./routes/roleRoutes')
const paymentRoutes=require('./routes/paymentRoutes')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');



const cors = require('cors')
const mongoose = require('mongoose');
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())


app.use('/foods', foodRoutes)
app.use('/restaurents', restaurentRoutes)
app.use('/carts', cartRoutes)
app.use('/usersignup', userRoutes)
app.use('/adminsignup',adminRoutes)
app.use('/login',authRoutes)
app.use('/logout',authRoutes)
app.use('/checkRole',roleRoutes)
app.use('/payments',paymentRoutes)

app.use(bodyParser.json());





app.listen(port,() => {
  console.log(`Example app listening on port ${port}`)
})

async function main() {
  await mongoose.connect('mongodb+srv://pkarjunsiva:ZwyPsAA58u5WqMmw@cluster0.jlpin.mongodb.net/cucumber');
}

main().then(()=>console.log("connected successfully")).catch(err => console.log(err));