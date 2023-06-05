const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    res.send('Hello World Hello!')
})

app.get('/age', (req, res) => {
    res.send('Say me your age!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})