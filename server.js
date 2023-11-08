const express =require("express");
const indexRouter = require("./routes/indexRouter");
const authRouter = require("./routes/authRouter");
const app =express()


app.use(authRouter);
app.use(indexRouter);



const port=5000
app.listen(port,()=>{
    console.log(`server is runnig on port: ${port}`);
})