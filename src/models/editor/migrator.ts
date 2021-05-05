import { Document, model, Schema } from 'mongoose'
import { ObjectId } from 'mongodb'
import { IMigrator, IMigratorDocument, IMigratorModel } from './interfaces/migrator'
import { MONGO_COLLECTIONS } from '../../config/keys'
import { CustomDocumentBuild } from '../../tools/mongodb/documentDefaults'

export const docMigrator = {
    appId: { type: Schema.Types.ObjectId },
    index: { type: Schema.Types.Number },
    generator: { type: Schema.Types.Mixed },
}

export const schema = CustomDocumentBuild(docMigrator)

/**
 * MODEL Migrator, used for interactions with MongoDB
 */

 schema.statics.getByAppId = async function getByAppId(appId: ObjectId) {
    const query = this.find({ appId })
    return query.exec().then((migrators: IMigratorDocument[]) => (migrators && migrators[0] ? migrators : undefined))
}

const Migrator: IMigratorModel = model<IMigratorDocument, IMigratorModel>(MONGO_COLLECTIONS.Migrators, schema)
export default Migrator
export {
    IMigrator,
    IMigratorDocument,
}