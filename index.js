// express server with port 5000
const express = require('express')
const app = express()
const port = 5000
// form encoding
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
