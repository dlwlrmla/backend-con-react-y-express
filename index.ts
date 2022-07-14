import express, { Express, Request, Response }from "express"
import dotenv from "dotenv"

//configuration .env
dotenv.config()

//create express app
const app: Express = express()
const port: string | number = process.env.PORT || 8000

app.get('/', (req:Request, res:Response) => {
    res.send("<h1>express tsc nodemon</h1>")
})

app.get('/hello',(req:Request, res:Response) => {
    res.json(data:{message:"goodbye world"})
})

app.listen(port, ()=> {
    console.log("running")
})