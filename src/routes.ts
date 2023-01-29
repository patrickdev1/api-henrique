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

    app.post('/users', (req: Request, res: Response) => {
        const userRepository = UserModel;
        userRepository.create({name: "Patrick", email: "patricao@hotmail.com", password: "senha123"})
        res.send("Usuário criado com sucesso!")
    })
}
