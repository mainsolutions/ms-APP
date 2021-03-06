const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()

app.use(express.static(path.join(__dirname, 'dist', 'ms-app'
)))

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'dist', 'ms-app', 'index.html'))
})
app.get('/pagina-inicial', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'ms-app', 'index.html'))
})
app.listen(port);
