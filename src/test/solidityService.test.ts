import { expect } from 'chai'

import { SolidityMigration } from '../services/solidityMigration'
import { createNFT } from '../services/solidityMigration/contracts/solidityNFTContract'
import { testGenerator } from './testingLets'

const checkNFTContract = (nftSmartContract: string) => {
    expect(nftSmartContract).to.be.a('string')
    expect(nftSmartContract).to.include(solidity.name)
    expect(nftSmartContract).to.include(solidity.symbol)
}

const SOLIDITY_MIGRATION = new SolidityMigration()
const { solidity } = testGenerator
describe('Solidity Migration', async function() {
    it('Generates a limited solidity NFT smart contract', async function() {
        const nftSmartContract: string = createNFT(solidity)
        checkNFTContract(nftSmartContract)
        expect(nftSmartContract).to.include(solidity.limitedMessage)
    })
    it('Generates a non-limited solidity NFT smart contract', async function() {
        solidity.limited = 0;
        const nftSmartContract: string = createNFT(solidity)
        checkNFTContract(nftSmartContract)
        expect(nftSmartContract).to.not.include(solidity.limitedMessage)
    })
}) 