import { NextFunction, Request, Response } from 'express';
import Jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { ApiError } from '../error/ApiError';
import userModels from '../models/users.models';
import { client } from '..';

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

type Roles = {
    id?: string;
    phone?: number;
    role?: string;
}

export interface CustomRequest extends Request {
    user: Roles;
}

class UserController {
    async login(req:Request, res:Response, next:NextFunction) {
        const { phone, password } = req.body;
        const user = await userModels.findOne({phone});

        if (!user){
            return next(ApiError.internal("Login yoki Parol noto`g`ri"));
        }
        
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Login yoki Parol noto`g`ri'));
        }
        const token = generateJWT(user.id, user.phone, user.role);
        return res.json({token});

    }

    async registration(req:Request, res:Response, next:NextFunction) {

        // for (let i = 1; i<10000; i++) {
        //     const user = await userModels.create({phone:i, password:i, code:i, role:"User", status:false});
        //     console.log(user);
        // }

        const { phone, password, role } = req.body;

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
        //some function send activite code, maybe use eskiz.uz
        const token = generateJWT(user.id, user.phone, user.role);
        return res.send({token});

    }

    async getAll(req:Request, res:Response, next:NextFunction) {
        let users = await client.get(`users?phone=${2}`)
        if (!users) {
            const user = await userModels.findOne({phone: 2});
            await client.setEx(`users?phone=${2}`, 3600, JSON.stringify(user))
            return res.json({user});
        }
        return res.json({users});
    }

    async check(req:Request, res:Response, next:NextFunction) {
        const token = generateJWT((req as CustomRequest).user.id as string, (req as CustomRequest).user.phone as number, (req as CustomRequest).user.role as string);
        return res.json({token});
    }

    async restartPassword(req:Request, res:Response, next:NextFunction) {
       
    }

}

export default new UserController();