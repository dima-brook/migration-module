import { ISolidityGenrator } from '../types'
// solidity contract generation
export default (solidityGenerator: ISolidityGenrator) => {

}

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
    constructor() ERC721("${name}", "${symbol}") public {
    }
}`
}


const NFTLimit = (limited: number) => `uint256 public limited = ${limited};
uint256 public count = 0;
`