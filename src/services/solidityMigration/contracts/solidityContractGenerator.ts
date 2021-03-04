import { ISolidityGenrator } from '../types'
// solidity contract generation
export default (solidityGenerator: ISolidityGenrator) => {

}

const createNFT = (solidityGenerator: ISolidityGenrator) => {
    const {
        name,
        symbol
    } = solidityGenerator
    return `pragma solidity ^0.8.0;
    
    import "./openZeppelin/ERC721.sol";
    
    contract ${name} is ERC721 {
        constructor() ERC721("${name}", "${symbol}") public {
        }
    }`
}


