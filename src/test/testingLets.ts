import { UseCaseEnum } from '../enums/useCasesEnum'
import { IGenerator } from '../services/migrationModule/types'
import { ISolidityGenrator } from '../services/solidityMigration/types'

let solidity: ISolidityGenrator = {
    name: 'TestContract',
    symbol: 'TEST',
    useCase: UseCaseEnum.MARKETPLACE,
    limited: 5,
    limitedMessage: 'This is a limited message',
    royalties: 0,
    adminMint: false,
    contractFunctionality: []
}

export let testGenerator: IGenerator = { solidity }

export const ARRAY = 'array'
export const STRING = 'string'