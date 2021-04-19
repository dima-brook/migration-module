import { NFT_CREATION_LIMIT_REACHED } from '../../../errors/solidityErrors'
import { ISolidityGenrator } from '../types'
import { ERC721 } from './@tools/libs'

// solidity contract generation
export default async (solidityGenerator: ISolidityGenrator) => {
    const { name } = solidityGenerator
    const code = createNFT(solidityGenerator)
    ERC721.libs.push({ code, location: '/contracts/' + name + '.sol' })
    try {
        return ERC721
    } catch(err) {
        return undefined
    }
}

/**
 * @param solidityGenerator - Editor output
 * @returns NFT contract
 */
export const createNFT = (solidityGenerator: ISolidityGenrator) => {
    const {
        name,
        symbol,
        limited
    } = solidityGenerator
    return `// SPDX-License-Identifier: MIT
    
pragma solidity ^0.8.0;
    
import "./openzeppelin/ERC721.sol";

contract ${name} is ERC721 {
    ${NFTLimit(limited)}
    uint256 public id = 0;
    mapping(uint256 => string) public tokenURIs;
    constructor() ERC721("${name}", "${symbol}") {

    }
    ${mint(solidityGenerator)}
}`
}

export const NFTTest = (solidityGenerator: ISolidityGenrator) => {
    const {
        name,
        symbol,
        adminMint
    } = solidityGenerator
    const testMint = `await testContract.mint(${adminMint ? 'verbal, ' : ''}'json-url')`
    return `
const { expect } = require('chai')

const ${name} = artifacts.require('./${name}.sol')
require('chai')
    .use(require('chai-as-promised'))
    .should()
contract('${name}', async ([roger, verbal, kint]) => {
    it('Deploys ${name}', async () => {
        let testContract = await ${name}.deployed( { from: roger })
        const name = await testContract.name()
        const symbol = await testContract.symbol()
        const ownerOfOne = await testContract.ownerOf(1)
        const tokenURI = await testContract.tokenURIs(1)
        const id = await testContract.id()
        const limited = await testContract.limited()

        ${testMint}

        expect(id).to.be.equal(1)
        expect(limited).to.be.equal(5)
        expect(tokenURI).to.be.equal('json-url')
        expect(ownerOfOne).to.be.equal(${adminMint ? 'verbal' : 'kint'})
        expect(name).to.be.equal('${name}')
        expect(symbol).to.be.equal('${symbol}')
    })
})`
}

/**
 * @param limited - Limited amount on the NFT token
 * @returns line of solidity code for limited
 */
const NFTLimit = (limited: number) => `uint256 public limited = ${limited};`

// mint nft function
const mint = (solidityGenerator: ISolidityGenrator) => {
    const { 
        limited,
        limitedMessage,
        adminMint
    } = solidityGenerator

    // limited message
    const lMsg = limitedMessage ? limitedMessage : NFT_CREATION_LIMIT_REACHED
    
    const mintArgs = `${adminMint ? '' : 'address to, '}string memory _uri`
    const _mint = `_mint(${adminMint ? 'msg.sender' : 'to'}, id); `

    return `
    function mint(${mintArgs}) public {
        ${limited ? `require(id < limited, '${lMsg}');` : ''}
        id ++;
        tokenURIs[id] = _uri;
        ${_mint} 
    }`
}