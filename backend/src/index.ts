import express from 'express'
import cors from 'cors';
import UserRouter from './Routes/UserRoutes';

const app = express()

app.use(cors({
    origin: '*',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
}))


app.use("/user", UserRouter)
