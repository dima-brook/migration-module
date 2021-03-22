import * as fs from 'fs'
import solidityContractGenerator from './contracts/solidityContractGenerator'

import { ISolidityGenrator } from './types'

export class SolidityMigration {
    
    async getNFTContract(solidityGenerator: ISolidityGenrator) {
        try {
            const nftZIP = await this.generateNFTContract(solidityGenerator)
            return nftZIP
        } catch(err) {
            return undefined
        }
    }

    async generateNFTContract(solidityGenerator: ISolidityGenrator): Promise<string | undefined> {
        try {
            return await solidityContractGenerator(solidityGenerator)
        } catch(err) {
            return undefined
        }
    }

}