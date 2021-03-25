import * as fs from 'fs'
import solidityContractGenerator from './contracts/solidityContractGenerator'

import { ISolidityGenrator } from './types'

export class SolidityMigration {
    
    /**
     * Generates an NFT contract zipped file
     * @param solidityGenerator - Editor output
     * @returns Zipped folder location
     */
    async getNFTContract(solidityGenerator: ISolidityGenrator) {
        try {
            return await solidityContractGenerator(solidityGenerator)
        } catch(err) {
            return undefined
        }
    }

}