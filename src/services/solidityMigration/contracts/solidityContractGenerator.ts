import { generator } from '../../../tools/fileGenerator'
import { NFT_CREATION_LIMIT_REACHED } from '../../../errors/solidityErrors'
import { ERC721 } from './@tools/libs'
import { ISolidityGenrator } from '../types'
// solidity contract generation
export default async (solidityGenerator: ISolidityGenrator) => {
    const { name } = solidityGenerator
    const code = createNFT(solidityGenerator)
    ERC721.libs.push({ code, location: '/' + name + '.sol' })
    try {
        return await generator(ERC721)
    } catch(err) {
        return undefined
    }
}
    /**
     * @param solidityGenerator - Editor output
     * @returns NFT contract
     */
const createNFT = (solidityGenerator: ISolidityGenrator) => {
    const {
        name,
        symbol,
        limited
    } = solidityGenerator
    return `// SPDX-License-Identifier: MIT
    
pragma solidity ^0.8.0;
    
import "./openZeppelin/ERC721.sol";

contract ${name} is ERC721 {
    ${NFTLimit(limited)}
    uint256 public count = 0;
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
        limitedMessage
    } = solidityGenerator

    // limited message
    const lMsg = limitedMessage ? limitedMessage : NFT_CREATION_LIMIT_REACHED
    return `
    function mint(string memory _uri) public {
        ${limited ? `require(count < limited, '${lMsg}');` : ''}
        count ++;
        tokenURIs[count] = _uri;
        _mint(msg.sender, count);   
    }`
}