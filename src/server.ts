import express from 'express'
import { Router } from './routes';

export const app = express();

app.use(express.json())

Router()

const PORT = 2000
app.listen(PORT, () => {
    console.log("o servidor esta ligado e escutando a porta: " + PORT)
})