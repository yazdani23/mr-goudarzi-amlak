const signup =(req, res)=>{
    try {
        return res.status(200).send("signup route")
    } catch (error) {
        return res.status(500).send("Internal Server Error")
    }
    
}
const login =(req, res)=>{
    try {
        return res.status(200).send("login route")
    } catch (error) {
        return res.status(500).send("Internal Server Error")
    }
    
}

module.exports={login, signup}