import { SolidityMigration } from '../solidityMigration'
import { IGenerator } from './types'
const SOLIDITY_MIGRATION = new SolidityMigration()
export class MigrationModule {
    generator: IGenerator
    constructor(generator: IGenerator) {
        this.generator = generator
    }
    
    async generateSolidityContracts() {
        const { solidity } = this.generator
        const contracts = await SOLIDITY_MIGRATION.getNFTContract(solidity)
        return contracts
    }
}