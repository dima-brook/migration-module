// SPDX-License-Identifier: MIT
    
pragma solidity ^0.8.0;
    
import "./openzeppelin/ERC721.sol";

contract TestContract is ERC721 {
    uint256 public limited = 5;
    uint256 public id = 0;
    mapping(uint256 => string) public tokenURIs;
    constructor() ERC721("TestContract", "TEST") {

    }
    
    function mint(address to, string memory _uri) public {
        require(id < limited, 'This is a limited message');
        id ++;
        tokenURIs[id] = _uri;
        _mint(to, id);  
    }
}