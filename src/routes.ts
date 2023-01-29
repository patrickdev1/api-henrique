import mongoose from 'mongoose';

import { UserController } from './User/Controllers/UserController';

mongoose.connect('mongodb+srv://patrickamaralr1:123456788@cluster0.ikokrra.mongodb.net/?retryWrites=true&w=majority')
mongoose.set('strictQuery', false)

export const Router = () => {
    mongoose.set('strictQuery', true)
    UserController()
}
