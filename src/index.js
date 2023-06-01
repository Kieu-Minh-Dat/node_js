const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./router')

app.use(express.urlencoded({
  extended : true
}))
app.use(express.json()) 

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))

app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views','./src/resources/views') ;


route(app)




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})