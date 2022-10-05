import mongoose, { Document, Schema } from "mongoose";

export interface ICard {
    cardHolderId: number;
    cardHolderName: string;
    cardName: string;
    cardNumber: number;
    cardExperienceDate: number;
    cardBank: number;
    cardType: number;
    cardMoney: number;
    cardStatus: boolean;
};

export interface ICardModel extends ICard, Document {};

const CardSchema: Schema = new Schema (
    {
        cardHolderId: { type: Number, require: true },
        cardHolderName: { type: String, require: true },
        cardName: { type: String, require: true },
        cardNumber: { type: Number, require: true },
        cardExperienceDate: { type: Number, require: true },
        cardBank: { type: Number },
        cardType: { type: Number, require: true },
        cardMoney: { type: Number },
        cardStatus: { type: Boolean }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ICardModel>('Card', CardSchema);