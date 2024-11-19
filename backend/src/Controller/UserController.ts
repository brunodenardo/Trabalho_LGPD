import { Request, Response } from "express";

class UserController{

    async listarDadosUsuario(req:Request, res:Response){
        res.send("foi")
    }

}

export default new UserController()