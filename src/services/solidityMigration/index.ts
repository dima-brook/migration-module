import * as fs from 'fs'

import { ISolidityGenrator } from './types'

export class SolidityMigration {
    
    migrate(solidityGenerator: ISolidityGenrator) {
        const nft = this.generateNFTContract(solidityGenerator)

    }

    generateNFTContract(solidityGenerator: ISolidityGenrator) {
        
    }

    async createPackage() {
        
    }
}