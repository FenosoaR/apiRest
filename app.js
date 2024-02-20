//yarn add express body-parser cors passport passport-jwt bcryptjs jsonwebtoken sequelize mysql2
// yarn add --dev sequelize-cli nodemon

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./models')
const fileUpload = require('express-fileupload')
const passport = require('passport')

const TodoResource = require('./resources/TodoResource')
const CategoryResource = require('./resources/CategoryResource')
const PostResource = require('./resources/PostResource')
const SecurityResource = require('./resources/SecurityResource')
const EmailResource = require('./resources/EmailResource')
require('./config/passport')

const app = express()

app.use(fileUpload())
app.use(cors())//maka sy mandefa requete am domaine hafa(gerer nom de domaine ahafahana mapiasa anilay api)

app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json({extended:false}))

app.use('/api/todos' , passport.authenticate('jwt' , {session:false}) , TodoResource)
app.use('/api/categories' , CategoryResource)
app.use('/api/posts' , PostResource)
app.use('/api' , SecurityResource)
app.use('/api/email' , EmailResource)


db.sequelize.sync()
.then(() =>{
    app.listen(9000, () =>{
        console.log('http://localhost:9000');
    })
})