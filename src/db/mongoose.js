const mongoose = require('mongoose')

const connectionURL = process.env.MONGODB_URL //"mongodb://127.0.0.1:27017/auth-test"

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})