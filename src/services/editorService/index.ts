import { ObjectId } from 'mongodb'

import App, { IApp } from '../../models/editor/app'
import Migrator, { IMigrator } from '../../models/editor/migrator'

// Smart Contract Editor actions
export class EditorService {
    createApp(doc: IApp) {
        return App.createNew(doc)
    }

    updateApp(appId: ObjectId, doc: IApp) {
        return App.updateById(appId, doc)
    }

    createMigrator(doc: IMigrator) {
        return Migrator.createNew(doc)
    }

    updateMigrator(appId: ObjectId, doc: IMigrator) {
        return Migrator.updateById(appId, doc)
    }
}