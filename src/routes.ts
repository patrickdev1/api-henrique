import { Request, Response} from 'express'
import mongoose from 'mongoose';

import {app} from "./server"
import { UserModel } from './User/models/User';

mongoose.connect('mongodb+srv://patrickamaralr1:123456788@cluster0.ikokrra.mongodb.net/?retryWrites=true&w=majority')

export const Router = () => {

    mongoose.set('strictQuery', true)

    app.get('/users', (req: Request, res: Response) => {
        const userRepository = UserModel.find();
        res.send(userRepository)
    })

    app.post('/users', async (req: Request, res: Response) => {
        const userRepository = UserModel;
        const name: string = req.body.name
        const email: string = req.body.email
        const password: string = req.body.password


        await userRepository.create({name, email, password})
        res.send("Usuário criado com sucesso!")
    })

}
