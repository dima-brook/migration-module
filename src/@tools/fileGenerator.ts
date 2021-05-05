import * as fs from 'fs'
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path'

import { ZipService } from '../services/zipService'
const ZIP = new ZipService()
export interface ILib  {
    location: string
    code: string
}
export interface GeneratorConfig {
    folders: string[]
    libs: ILib[]
}

export const generator = async (files: GeneratorConfig, zip?: boolean): Promise<string | undefined> => {
    const { libs, folders } = files
    const publicFolder = path.resolve(__dirname + '../../../public')
    const folderName = uuidv4()
    const loc = publicFolder + '/' + folderName
    fs.mkdirSync(loc)
    for await (let folder of folders) {
        fs.mkdirSync(loc + folder)
    }
    for await(let lib of libs) {
        const { code, location } = lib
        fs.writeFileSync(loc + location, code)
    }
    if(zip) {
        try {
            if(zip) {
                const fileLocation = await ZIP.zip(loc)
                return fileLocation
            }
        } catch (err) {
            return undefined
        }
    }
    return loc
}