import mongoose, { Document, Schema } from "mongoose";

export interface IUser {
    phone: number;
    password: string;
    code: number;
    name: string;
    role: string;
    status: boolean;
};

export interface IUserModel extends IUser, Document {};

const UserSchema: Schema = new Schema (
    {
        phone: { type: Number, require: true },
        password: { type: String, require: true },
        code: { type: Number},
        name: { type: String, require: true },
        role: { type: String, require: true },
        status: { type: Boolean }
    }, 
    {
        timestamps: true
    }
);

export default mongoose.model<IUserModel>('User', UserSchema);