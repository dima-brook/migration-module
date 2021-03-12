import { Document, Model } from 'mongoose'
import { ObjectId } from 'mongodb'
import { IGenerator } from '../../../services/migrationService/types'

export interface IMigrator {
    appId: ObjectId
    generator: IGenerator
}

// Instance methods
export interface IMigratorDocument extends IMigrator, Document {
    toJSON();
}


// Static methods
export interface IMigratorModel extends Model<IMigratorDocument> {
    getById(to: ObjectId): Promise<IMigratorDocument>
    removeById(id: ObjectId): Promise<boolean>
    updateById(id: ObjectId, doc: IMigrator): Promise<IMigratorDocument>
    createNew(doc: IMigrator): Promise<IMigratorDocument>
}