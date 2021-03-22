import * as fs from 'fs'
import * as archiver from 'archiver'

export class ZipService {
    async zip (location: string): Promise<string | undefined> {
        return new Promise((res, rej) => {
            const zip = location + '.zip'
            try {
                const output = fs.createWriteStream(zip)
                const archive = archiver('zip')
                output.on('close', function () {
                    fs.rmdirSync(location, {recursive: true})
                    res(zip)
                })
                archive.on('error', function(err){
                    rej()
                })
                archive.pipe(output)
                archive.directory(location, false)
                archive.finalize()
            } catch(err) {
                rej()
            }
        })
    }
}