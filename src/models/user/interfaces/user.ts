import { Document, Model } from 'mongoose'
import { ObjectId } from 'mongodb'

export const USER_DOES_NOT_EXIST = 'User does not exist'
export const USER_LOGIN_BLOCKED = 'User is blocked from logging in'
export const USER_EMAIL_EXISTS = 'This email already exists'
export const USER_SUCCESSFUL_LOGIN = 'User Successful Login'
export const USER_LOGIN_INCORRECT_PASSWORD = 'User Incorrect Password'
export const INAVLID_RESET_PASSWORD_TOKEN = 'Invalid reset password token'

export interface IUser {
    password: string
    email: string
    lowerCaseEmail: string
}

// Instance methods
export interface IUserDocument extends IUser, Document {
    toJSON();
}

export const isUser = (object: any): object is IUserDocument => {
    return 'password' in object
    && 'email' in object
    && 'lowerCaseEmail' in object
}
export interface IUserLogin {
    user: IUserDocument
    message: string
}

// Static methods
export interface IUserModel extends Model<IUserDocument> {
    getById(to: ObjectId): Promise<IUserDocument>
    removeById(id: ObjectId): Promise<boolean>
    updateById(id: ObjectId, doc: IUser): Promise<IUserDocument>
    createNew(doc: IUser): Promise<IUserDocument>
    register(user: IUser): Promise<IUserDocument | string>
    login(email: string, password: string): Promise<IUserLogin>
    doesEmailExist(lowerCaseEmail: string): Promise<IUserDocument>
    changePassword(_id: ObjectId, _password: string): Promise<IUserDocument>
}