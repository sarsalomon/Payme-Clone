import { NextFunction, Request, Response } from 'express';
import Jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { ApiError } from '../error/ApiError';
import userModels from '../models/users.models';

const generateJWT = (id:string, phone:number, role:string) => {
    if(!id || !phone || !role){
        return 'error'
    }
    const token = Jwt.sign(
        {id, phone, role},
        process.env.SECRET_KEY,
        {expiresIn: '365d'}
    );
    return token;
}

export interface CustomRequest extends Request {
    user: object;
}

export type Roles = {
    id: string;
    phone: number;
    role: string;
    name: string;
}

class UserController {

    async login(req:Request, res:Response, next:NextFunction) {
        const { phone } = req.body;
        console.log('test')
        const user = await userModels.findOne({phone});

        if (!user) {
            return next(ApiError.badRequest("Kotini qis"));
        }
        const token = generateJWT(user.id, user.phone, user.role);
        return res.json({token});

    }

    async registration(req:Request, res:Response, next:NextFunction) {
        const { phone, password, role } = req.body;
        console.log(req.body)

        if (!phone) {
            return next(ApiError.badRequest("telefon raqam yozilmadi"));
        } else if (!password) {
            return next(ApiError.badRequest("Parol yozilmadi"));
        } else if (!role) {
            return next(ApiError.badRequest("Role topilmadi"));
        }


        const checkUser = await userModels.findOne({phone});

        if (checkUser) {
            return next(ApiError.badRequest("Topildi"));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const generateCode = await Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
        const user = await userModels.create({phone, password:hashPassword, code:generateCode, role, status:false});
        const token = generateJWT(user.id, user.phone, user.role);
        return res.send({token});

    }

    async check(req:Request, res:Response, next:NextFunction) {
        // const token = generateJWT((req as CustomRequest).user.id, (req as CustomRequest).user.phone, (req as CustomRequest).user.role, (req as CustomRequest).user.name);
        // return res.json({token});
    }


}

export default new UserController();