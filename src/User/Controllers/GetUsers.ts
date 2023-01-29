import { UserModel } from "../models/User";
import { Request, Response } from 'express'

export const GetUsers = async (req: Request, res: Response) => {
    const userRepository = await UserModel.find();
    res.send(userRepository)
}