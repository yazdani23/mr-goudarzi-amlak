const express= require("express")
const { index, route404 } = require("../controllers/indexController")
const indexRouter= express.Router()


indexRouter.get("/",index)
indexRouter.get("*", route404)
module.exports=indexRouter