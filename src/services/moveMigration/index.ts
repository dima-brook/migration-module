
import { IMoveGenrator } from './types'

export class SolidityMigration {
    moveGenerator: IMoveGenrator
    constructor(moveGenerator: IMoveGenrator) {
        this.moveGenerator = moveGenerator
    }
    /**
     * Generates an NFT contract zipped file
     * @param moveGenerator - Editor output
     * @returns generator object
     */
    async getNFTContract() {
        try {
        } catch(err) {
            return undefined
        }
    }

}