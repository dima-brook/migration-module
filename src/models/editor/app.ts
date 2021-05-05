import { Document, model, Schema } from 'mongoose'
import { ObjectId } from 'mongodb'
import { 
    IApp, 
    IAppDocument, 
    IAppModel, 
} from './interfaces/app'
import { MONGO_COLLECTIONS } from '../../config/keys'
import { CustomDocumentBuild } from '../../tools/mongodb/documentDefaults'

export const docApp = {
    userId: { type: Schema.Types.ObjectId },
    title: { type: Schema.Types.String }
}

export const schema = CustomDocumentBuild(docApp)

schema.statics.getByUserId = async function getByUserId(userId: ObjectId) {
    const query = this.find({ userId })
    return query.exec().then((apps: IAppDocument[]) => (apps && apps[0] ? apps : undefined))
}

const App: IAppModel = model<IAppDocument, IAppModel>(MONGO_COLLECTIONS.Apps, schema)
export default App
export {
    IApp,
    IAppDocument
}