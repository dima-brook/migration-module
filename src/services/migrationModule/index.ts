import { SolidityMigration } from '../solidityMigration'
import { IGenerator } from './types'

export class MigrationModule {
    generator: IGenerator
    constructor(generator: IGenerator) {
        this.generator = generator
    }
    
    async generateSolidityContracts() {
        const { solidity } = this.generator
        const SOLIDITY_MIGRATION = new SolidityMigration(solidity)
        const contracts = await SOLIDITY_MIGRATION.getNFTContract()
        return contracts
    }
}