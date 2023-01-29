import { app } from "../../server";
import { GetUsers } from "./GetUsers";
import { GetUserById } from "./GetUserById";
import { PostUser } from "./PostUser";
import { PutUser } from "./PutUser";

export const UserController = () => {

    app.get('/users', GetUsers)

    app.get('/usersbyid', GetUserById)

    app.post('/users', PostUser )

    app.put('/updateUser', PutUser)

}