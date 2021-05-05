import * as fs from 'fs'
import * as path from 'path'
import { exec } from 'child_process'
import { assert, expect } from 'chai'
import { MigrationModule } from '../services/migrationModule'

import { generator, GeneratorConfig, ILib } from '../@tools/fileGenerator'
import { ARRAY, STRING, testGenerator } from './testingLets'
const MIGRATION_MODULE = new MigrationModule(testGenerator)
const rootLocation = path.resolve(__dirname + '../../../')
describe('Migration Module', async function() {
    it('Generates a solidity smart contract', async function() {
        const solidity: GeneratorConfig | undefined = await MIGRATION_MODULE
            .generateSolidityContracts()
        if(solidity) {
            const { folders, libs } = solidity
            expect(folders).to.be.an(ARRAY)
            expect(libs).to.be.an(ARRAY)
            folders.forEach((n: string) => expect(n).to.be.a(STRING))
            libs.forEach((n: ILib) => {
                expect(n.code).to.be.a(STRING)
                expect(n.location).to.be.a(STRING)
            })
            const location = await generator(solidity)
            if(location) {
                const files = fs.readdirSync(location)
                files.forEach(n => {
                    fs.renameSync(location + '/' + n, rootLocation + '/' + n)
                })
                exec('truffle test', (err, stdout, stderr) => {
                    if(err) console.log(err.message)
                    else console.log(stdout)
                    files.forEach(n => {
                        fs.rmdir(rootLocation + '/' + n, {recursive: true}, (e) => {if(e) console.log(e.message, 'Contract cleanup failed')})
                    })
                    fs.rmdir(location, {recursive: true}, (e) => {if(e) console.log(e.message, 'Contract cleanup failed')})
                })
            }
        } else assert.fail()
    })
})