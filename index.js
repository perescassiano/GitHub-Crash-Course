const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    res.send('Hello World Hello!')
})

app.get('/age', (req, res) => {
    res.send('Say me your age!')
});
app.get('/oi', (req, res) => {
    res.send('Oi Mundo!')
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


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})