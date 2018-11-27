var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const users = require('./models/users');
const indexes = require('./routes/indexes');

// [CONFIGURE APP TO USE bodyParser]
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

//db connect
mongoose.connect('mongodb://localhost/gogo_db', {useNewUrlParser: true}).then(()=>
console.log('Connected to MongoDB')).catch(error => console.error(error));


// [CONFIGURE ROUTER]
app.use(express.json());
app.use('/', indexes);




// 메소드로 서버에 접속을 할 수 있으며, 따로 설정 할 파라미터가 있다면 다음과 같이 uri를 설정하면 됩니다.

//server
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));