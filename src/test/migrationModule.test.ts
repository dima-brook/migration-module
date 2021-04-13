import { assert, expect } from 'chai'
import { MigrationModule } from '../services/migrationModule'
import { GeneratorConfig, ILib } from '../tools/fileGenerator'
import { ARRAY, STRING, testGenerator } from './testingLets'

const MIGRATION_MODULE = new MigrationModule(testGenerator)

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
        } else assert.fail()
    })
})