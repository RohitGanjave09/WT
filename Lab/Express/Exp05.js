/*node.js :  
            it is runtime environment that runs js on server side,
            built on chrome's v8 js engine
            used to create fast, scalable web application*/

/*Experess.js : 
            It is minimal and flexible web framework  
            It helps to handle route, middleware and HTTP requests easily
            Make backend development fast and simple*/

/*why use express.js : 
            simplyfies server creation in node js
            offer powerful features like static file service and error handling*/

//npm : node package manager, it is tool to install packages and libraries for node.js ecosystem
//every node project uses packet.js to manage dependencies

/*install Express:
  node v
  npm init
  npm i express*/

//npm init -y  -- to create package.json file with default values

//******activity : 
// what is the use of package.json file in node.js project
//difference between package.json and package-lock.json
//what is use of devDependencies and dependencies in package.json

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/time',(req,res) => {
    let date = new Date();

    res.json({
        message : "Learning",
        time: date.toLocaleTimeString()
    })

})

app.listen(port, () => {
  console.log("http://localhost:" + port)
})
