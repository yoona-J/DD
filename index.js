const express = require('express')
const app = express()
const port = 3000

// L9
const config = require('/.config/key')

// L7
const bodyParser = require('body-parser');
const { User } = require("./models/User");

// L7 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// L7 application/json
app.use(bodyParser.json());

// L3 -> L9에서 수정
const mongoose  = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})



// L7 회원 가입 할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다.
app.post('/register', (req, res) => {
  const user = new User(req.body)

  user.save((err, doc) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({success: true})
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})