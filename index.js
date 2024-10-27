
import express from 'express'
import { dbConnection } from './dataBase/dbConnection.js'
import * as dotenv from 'dotenv'
import userRouter from './src/modules/User/user.router.js'
dotenv.config()
const app = express()
const port = 3000


app.use(express.json())
app.use('/users',userRouter)

app.get('/', (req, res) => res.send('Hello World!'))

dbConnection()
app.listen( port, () => console.log(`Example app listening on port ${port}!`))