import { ISolidityGenrator } from '../types'
// solidity contract generation
export default (solidityGenerator: ISolidityGenrator) => {

}
// generate nft for user of user
const createNFT = (solidityGenerator: ISolidityGenrator) => {
    const {
        name,
        symbol,
        limited
    } = solidityGenerator
    return `pragma solidity ^0.8.0;
    
import "./openZeppelin/ERC721.sol";
contract ${name} is ERC721 {
    ${NFTLimit(limited)}
    uint256 public count = 0;
    mapping(uint256 => string) public tokenURIs;
    constructor() ERC721("${name}", "${symbol}") public {

    }
    ${mint(solidityGenerator)}
}`
}

// limit the creation of nft
const NFTLimit = (limited: number) => `uint256 public limited = ${limited};
`

const mint = (solidityGenerator: ISolidityGenrator) => {
    const { 
        limited,
        limitedMessage
    } = solidityGenerator
    return `
    mint(string memory _uri) public {
        ${limited ? `require(count < limited, '${limitedMessage}');` : ''}
        tokenURIs[count] = _uri;
        _mint(msg.sender, count);   
        count ++;
    }    
`
}