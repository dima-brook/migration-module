import { Document, Model } from 'mongoose'
import { ObjectId } from 'mongodb'

export interface IApp {
    userId: ObjectId
    title: string
}

// Instance methods
export interface IAppDocument extends IApp, Document {
    toJSON();
}


// Static methods
export interface IAppModel extends Model<IAppDocument> {
    getById(to: ObjectId): Promise<IAppDocument>
    removeById(id: ObjectId): Promise<boolean>
    updateById(id: ObjectId, doc: IApp): Promise<IAppDocument>
    createNew(doc: IApp): Promise<IAppDocument>
}