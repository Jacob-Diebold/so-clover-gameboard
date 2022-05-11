const express = require("express")
const ejs = require("ejs")
const _ = require("lodash")

const app = express()
const port = 3000
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


app.get("/", function (req,res) {
    res.render(__dirname + "/views/index.ejs")
})


app.listen(port, function () {
    console.log("Server is running on port " + port)
})