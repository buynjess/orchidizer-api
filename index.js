const express = require('express')
const bodyParser = require( 'body-parser')
const db = require ('monk')('mongodb:admin:password1@ds255539.mlab.com:55539/plants')
const app = express()
const port = process.env.PORT || 4001
const plantscollection = db.get('plants')

app.use(bodyParser.json())

app.use((req, resp, next) => {
    resp.header('Access-Control-Allow-Origin', '*')
    resp.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

app.get('/', async (req, resp) => {
    console.log('test')
    // const plants = await plantscollection.find()
    resp.send('test')
});

app.post('/', async (req, resp) => {
    plantscollection.insert(req.body)
    const plants = await plantscollection.find()
    resp.send(plants)
});

app.put('/', (req, resp) => resp.send('PUTing stuff'))

app.delete('/', (req, resp) => resp.send('DELETEin stuff'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))