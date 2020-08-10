const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/time', (req, res) => {
  res.send((new Date()).toString())
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
