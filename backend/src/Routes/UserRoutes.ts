import Router from "express";
import UserController from "../Controller/UserController";

const UserRouter = Router()

UserRouter.get("/dadosUsuario", UserController.listarDadosUsuario)

export default UserRouter