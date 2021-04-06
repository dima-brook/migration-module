import { assert, expect } from 'chai'
import { UseCaseEnum } from '../enums/useCasesEnum'
import { MigrationModule } from '../services/migrationModule'
import { IGenerator } from '../services/migrationModule/types'
import { GeneratorConfig, ILib } from '../tools/fileGenerator'
const generator: IGenerator = {
    solidity: {
        name: 'TestContract',
        symbol: 'TEST',
        useCase: UseCaseEnum.MARKETPLACE,
        limited: 5,
        limitedMessage: '',
        royalties: 0,
        adminMint: false,
        contractFunctionality: []
    }
}

const MIGRATION_MODULE = new MigrationModule(generator)

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