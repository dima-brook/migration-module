import { UseCaseEnum } from '../enums/useCasesEnum'
import { MigrationModule } from '../services/migrationModule'
import { IGenerator } from '../services/migrationModule/types'

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

describe('Migration Module', async () => {
    const solidity = await MIGRATION_MODULE.generateSolidityContracts()
    console.log(solidity)
})