import mongoose, { Document, Schema } from "mongoose";

export interface ITransfers {
    fromUser: number;
    toUser: number;
    fromUserCardId: number;
    toUserCardId: number;
    money: number;
    status: number;
};

export interface ITransfersModel extends ITransfers, Document {};

const TransfersSchema: Schema = new Schema (
    {
        fromUser: { type: Number, require: true },
        toUser: { type: Number, require: true },
        fromUserCardId: { type: Number, require: true },
        toUserCardId: { type: Number, require: true },
        money: { type: Number, require: true },
        status: { type: Number }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ITransfersModel>('Transfers', TransfersSchema);