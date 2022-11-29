let express = require('express')
let api_routes = require('./routes/api.js')

// create web app
let app = express()

// handle json requests and convert data to javascript
app.use(express.json())

app.use('/api', api_routes)

app.use(function(req, res, next) {
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
})

// start server
let server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server running on port ', server.address().port)
})