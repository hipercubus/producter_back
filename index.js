const express = require("express")
const bodyParser = require("body-parser")
const usersApiRouter = require("./routes/api/users")

// App
const app = express()

// Middlewares
app.use(bodyParser.json())

// Routes
app.use("/api/users", usersApiRouter)

// Default Routes / Redirects
app.get("/", (req, res, next) => {
    res.send({
        "AppName": "Gestor JazmeenDeco",
        "AppVersion": "2.6.1"
    })
})

// Server listener
const server = app.listen(8000, () => {
    console.log(`Listening http://localhost:${server.address().port}`)
})