import { UserModel } from "../models/User";
import { Request, Response } from 'express'

export const PutUser = async (req: Request, res: Response) => {

    try{
        const userRepository = UserModel;
        const name: string = req.body.name
        const email: string = req.body.email
        const password: string = req.body.password

        const userLogin = await userRepository.findOne({ email: email, password: password })

        if(userLogin){
            await userRepository.findOneAndUpdate({_id: userLogin._id}, {name: name})
            res.send("Usuário alterado com sucesso!")
        }else {
            res.send("Usuario nao encontrado.")
        }
        

    } catch (e) {
        console.log(e)
        res.status(500).end()
    }
}