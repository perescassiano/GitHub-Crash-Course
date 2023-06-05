const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/name', (req, res) => {
    const {name} = req.body;
    res.status(201).json(name);
})

app.post('/lastname', (req, res) => {
    const {lastname} = req.body;
    res.status(201).json(lastname);
})

app.post('/age', (req, res) => {
    const {age} = req.body;
    res.status(201).json(age);
})

app.post('/address', (req, res) => {
    const {address} = req.body;
    res.status(201).json(address);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})