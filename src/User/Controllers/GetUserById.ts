import { UserModel } from "../models/User";
import { Request, Response } from 'express'
import { Types } from "mongoose";

export const GetUserById = async (req: Request, res: Response) => {
    const id: string = req.body.id
    
    const userRepository = await UserModel.aggregate([
        {
            $match: {
                _id: new Types.ObjectId(id)
            }
        },
        {
            $project: {
                _id: 0,
                name: 1,
                email: 1
            }
        }
    ])
    res.send(userRepository)
}