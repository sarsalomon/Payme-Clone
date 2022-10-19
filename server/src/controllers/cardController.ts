import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../error/ApiError';
import cardsModels from '../models/cards.models';

class CardController {
    async addCard(req: Request, res: Response, next: NextFunction) {
        const { cardHolderId, cardHolderName, cardName, cardNumber, cardExperienceDate, cardBank, cardType, cardMoney, cardStatus } = req.body;
        console.log(cardStatus)
        if (!cardHolderId) {
            return next(ApiError.badRequest("Xatoliik1"));
        } else if (!cardName) {
            return next(ApiError.badRequest("Xatoliik2"));
        } else if (!cardHolderName) {
            return next(ApiError.badRequest("Xatoliik3"));
        } else if (!cardNumber) {
            return next(ApiError.badRequest("Xatoliik4"));
        } else if (!cardExperienceDate) {
            return next(ApiError.badRequest("Xatoliik5"));
        } else if (!cardBank) {
            return next(ApiError.badRequest("Xatoliik6"));
        } else if (!cardType) {
            return next(ApiError.badRequest("Xatoliik7"));
        } else if (!cardMoney) {
            return next(ApiError.badRequest("Xatoliik8"));
        }
        
        const cardFind = await cardsModels.findOne({cardNumber, cardExperienceDate, cardHolderName});

        if (cardFind) {
            return next(ApiError.badRequest("Xatoliik10"));
        }
        
        const card = await cardsModels.create({cardHolderId, cardHolderName, cardName, cardNumber, cardExperienceDate, cardBank, cardType, cardMoney, cardStatus});
        return res.send(card)

    }
   
    async getAllCard(req: Request, res: Response, next: NextFunction) {
        const getAllC = await cardsModels.find();
        return res.json(getAllC);
    }

    async getAllByUserIdCard(req: Request, res: Response, next: NextFunction) {
        const getAllC = await cardsModels.find();
        return res.json(getAllC);
    }

    async getByIdCard(req: Request, res: Response, next: NextFunction) {
        const { id } = req.body;
        const getByIdC = await cardsModels.findById(id);
        return res.json(getByIdC);
    }

    async updateCard(req: Request, res: Response, next: NextFunction) {
        const { id, cardName } = req.body;
        const updateC = await cardsModels.findByIdAndUpdate(id, {cardName},{new:true});
        return res.json(updateC);
    }

    async deleteCard(req: Request, res: Response, next: NextFunction) {
        const { id } = req.body;
        const deleteC = await cardsModels.findByIdAndDelete(id);
        return res.json(deleteC);
    }


}

export default new CardController();
