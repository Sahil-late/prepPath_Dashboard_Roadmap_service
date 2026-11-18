import express from 'express';
import Roadmaps from './routes/roadmaps'
import cors from 'cors'
import env from 'dotenv'
import { connectRedis } from './config/redis';
env.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/', Roadmaps)

const server = async () => {
    await connectRedis()
    app.listen(port, () => {
        console.log(`http://localhost:${port}`)
    })
}

server()
