import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface CustomRequest extends Request {
    user: string | JwtPayload;
}

export default (req: Request, res: Response, next: NextFunction) => {
    
    if (req.method === "OPTIONS") {
        next();
    }

    try {
        // const token = req.header('Authorization')?.replace('Bearer ', '');
        const token:string | undefined | JwtPayload = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({message: "UnAuthorized"});
        }

        const decodedData: string | JwtPayload = jwt.verify(token, process.env.SECRET_KEY);
        (req as CustomRequest).user = decodedData;
        next();

    } catch (e) {
        return res.status(401).json({message: "Please authenticate"});
    }
}