import { ObjectId } from 'mongodb'

import App, { IApp } from '../../models/editor/app'

export class EditorService {
    createApp(doc: IApp) {
        return App.createNew(doc)
    }

    updateApp(appId: ObjectId, doc: IApp) {
        return App.updateById(appId, doc)
    }
}