import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../error/ApiError';
import transfersModel from '../models/transfers.model';

class TransferController {

   async getAllTransfer(req: Request, res: Response, next: NextFunction) {
      const getAllT = await transfersModel.find();
      return res.json(getAllT)
   }
   
   async getAllByUserIdTransfer(req: Request, res: Response, next: NextFunction) {
      const getAllT = await transfersModel.find();
      return res.json(getAllT)
   }

   async createTransfer(req: Request, res: Response, next: NextFunction) {
      const { fromUser, toUser, fromUserCardId, toUserCardId, money, status } = req.body;

      if (!fromUser) {
         return next(ApiError.badRequest('kotini qis'));
      } else if (!toUser) {
         return next(ApiError.badRequest('kotini qis'))
      } else if (!fromUserCardId) {
         return next(ApiError.badRequest('kotini qis'))
      } else if (!toUserCardId) {
         return next(ApiError.badRequest('kotini qis'))
      } else if (!money) {
         return next(ApiError.badRequest('kotini qis'))
      }

      const createT = await transfersModel.create({fromUser, toUser, fromUserCardId, toUserCardId, money, status});
      return res.json(createT)

   }

   async updateTransfer(req: Request, res: Response, next: NextFunction) {
    
   }

   async getByIdTransfer(req: Request, res: Response, next: NextFunction) {
      const { id } = req.params;
      const getByIdT = await transfersModel.findById(id);
      return res.json(getByIdT);
   }

   async deleteTransfer(req: Request, res: Response, next: NextFunction) {
    
   }

   async checkTransfer(req: Request, res: Response, next: NextFunction) {
    
   }
   
   async cancelTrnasfer(req: Request, res: Response, next: NextFunction) {
      const { id } = req.body;
      const cancelT = await transfersModel.findByIdAndUpdate(id, {status:4}, {new:true});
      return res.json(cancelT);
   }

}

export default new TransferController();