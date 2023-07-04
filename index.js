const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
// const handlebars = require('express-handlebars')
// const session = require('express-session')
const app = express()
// const path = require('path')
const PORT = process.env.PORT
const router = require('./routers')
const passport = require('passport')
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))

const errorHandlingMiddleware = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err });
  };
  app.use(errorHandlingMiddleware);
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: false,
//     }
// }))
// app.use(express.static(path.join(__dirname, 'css')))
// app.use(passport.session())
app.use(passport.initialize())
// app.engine('hbs', handlebars.engine({
//     extname: '.hbs'
// }))
app.use(express.json())
app.use(express.urlencoded(
    {
        extended:true
    }
))
router(app)

// app.set('view engine', 'hbs')
// app.set('views', path.join(__dirname, 'views'))

app.listen(PORT, () => console.log(`SEVER IS RUNING ON PORT ${PORT}`))