import * as fs from 'fs'
import solidityContractGenerator from './contracts/solidityContractGenerator'
import solidityMarketplaceContract from './contracts/solidityMarketplaceContract'

import { ISolidityGenrator } from './types'

export class SolidityMigration {
    solidityGenerator: ISolidityGenrator
    constructor(solidityGenerator: ISolidityGenrator) {
        this.solidityGenerator = solidityGenerator
    }
    /**
     * Generates an NFT contract zipped file
     * @param solidityGenerator - Editor output
     * @returns generator object
     */
    async getNFTContract() {
        try {
            return await solidityContractGenerator(this.solidityGenerator)
        } catch(err) {
            return undefined
        }
    }

    async getMarketplaceContract() {
        return await solidityMarketplaceContract(this.solidityGenerator)
    }

}