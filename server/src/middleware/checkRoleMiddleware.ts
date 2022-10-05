import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface Roles {
    role: string | JwtPayload;
}

export default (role: Array<string>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            const token: string | undefined | JwtPayload = req.headers.authorization?.split(' ')[1];

            if (!token){
                return res.status(401).json({message: "UnAuthorized"});
            }

            const decodedData: string | JwtPayload = jwt.verify(token, process.env.SECRET_KEY);

            let hasRole = false;
            role.map(name => {
                if(name == (decodedData as Roles).role){
                    hasRole = true;
                }
            })

            if (!hasRole) {
                return res.status(403).json({message: "У вас нет доступа"});
            }
            
            next();

        } catch (e) {
            return res.status(401).json({message: "Please authenticate"});
        }
    }
}