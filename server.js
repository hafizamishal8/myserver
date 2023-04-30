const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("HELLO WORLD")

})




app.get('/about', (req, res) => {
    res.send("Hello from about")
  
  })
  
  app.listen(port,() => {
  
      console.log( 'Exapmle is Listening on port ${port}')
      
  })