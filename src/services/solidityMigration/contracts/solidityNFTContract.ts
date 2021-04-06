import { NFT_CREATION_LIMIT_REACHED } from '../../../errors/solidityErrors'
import { ISolidityGenrator } from '../types'
import { ERC721 } from './@tools/libs'

// solidity contract generation
export default async (solidityGenerator: ISolidityGenrator) => {
    const { name } = solidityGenerator
    const code = createNFT(solidityGenerator)
    ERC721.libs.push({ code, location: '/' + name + '.sol' })
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