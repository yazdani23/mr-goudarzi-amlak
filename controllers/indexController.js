const index =(req, res)=>{
    return res.send("root route")
}
const route404 =(req, res)=>{
    return res.send("not found route")
}

module.exports={index, route404}