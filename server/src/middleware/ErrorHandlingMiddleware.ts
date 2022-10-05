import { Request, Response, NextFunction } from 'express';
import { ApiError } from "../error/ApiError"

const errorHandler = (err: ApiError,  req: Request, res: Response, next: NextFunction): Response => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message});
    }
    return res.status(500).json({message: "not reg error!"});
}

export default errorHandler;