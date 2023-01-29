import { UserModel } from "../models/User";
import { Request, Response } from 'express'

export const PostUser = async (req: Request, res: Response) => {

    try{
        const userRepository = UserModel;
        const name: string = req.body.name
        const email: string = req.body.email
        const password: string = req.body.password


        await userRepository.create({name, email, password})
        res.send("Usuário criado com sucesso!")

    } catch (e) {
        console.log(e)
        res.status(500).end()
    }
}