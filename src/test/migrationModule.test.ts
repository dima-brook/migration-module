import { assert, expect } from 'chai'
import { MigrationModule } from '../services/migrationModule'
import { GeneratorConfig, ILib } from '../tools/fileGenerator'
import { testGenerator } from './testingLets'

const MIGRATION_MODULE = new MigrationModule(testGenerator)

describe('Migration Module', async function() {
    it('Generates a solidity smart contract', async function() {
        const solidity: GeneratorConfig | undefined = await MIGRATION_MODULE
            .generateSolidityContracts()
        if(solidity) {
            const { folders, libs } = solidity
            expect(folders).to.be.an('array')
            expect(libs).to.be.an('array')
            folders.forEach((n: string) => expect(n).to.be.a('string'))
            libs.forEach((n: ILib) => {
                expect(n.code).to.be.a('string')
                expect(n.location).to.be.a('string')
            })
        } else assert.fail()
    })
})