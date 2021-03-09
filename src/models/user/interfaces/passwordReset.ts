import { Document, Model } from 'mongoose'
import { ObjectId } from 'mongodb'

export interface IPasswordReset {
    userId: ObjectId
    token: string
}

// Instance methods
export interface IPasswordResetDocument extends IPasswordReset, Document {
    toJSON();
    used: boolean
}


// Static methods
export interface IPasswordResetModel extends Model<IPasswordResetDocument> {
    getById(to: ObjectId): Promise<IPasswordResetDocument>
    removeById(id: ObjectId): Promise<boolean>
    updateById(id: ObjectId, doc: IPasswordReset): Promise<IPasswordResetDocument>
    createNew(doc: IPasswordReset): Promise<IPasswordResetDocument>
    checkToken(token: string): Promise<IPasswordResetDocument>
}