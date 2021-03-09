import { Document, model, Schema } from 'mongoose'
import { ObjectId } from 'mongodb'
import { IPasswordReset, IPasswordResetDocument, IPasswordResetModel } from './interfaces/passwordReset'
import { MONGO_COLLECTIONS } from '../../config/keys'
import { CustomDocumentBuild } from '../../tools/mongodb/documentDefaults'
import moment = require('moment')

export const docPasswordReset = {
    userId: { type: Schema.Types.ObjectId },
    token: { type: Schema.Types.String },
    used: { type: Schema.Types.Boolean, default: false },
}

export const schema = CustomDocumentBuild(docPasswordReset)

schema.statics.checkToken = async function checkToken(token: string) {
    const $gte = moment().add(-5, 'minute').toDate()
    const query = this.findOne({ 
        token, 
        used: { $ne: true }, 
        createdAt: { $gte }
    }).sort({createdAt: -1})
    return await query.exec().then((r: IPasswordResetDocument) => r ? r : undefined)
}
/**
 * MODEL PasswordReset, used for interactions with MongoDB
 */
const PasswordReset: IPasswordResetModel = model<IPasswordResetDocument, IPasswordResetModel>(MONGO_COLLECTIONS.PasswordResets, schema)
export default PasswordReset
export {
    IPasswordReset,
    IPasswordResetDocument,
}