import { ISolidityGenrator } from '../types'

export default (solidityGenerator: ISolidityGenrator) => {

}

const marketplace = (solidityGenerator: ISolidityGenrator) => {
    const { name } = solidityGenerator
    return `import {${name}} from './${name}.sol';

    contract Marketplace {
        
        event ${name}DataStatusChange(uint256 id, bytes32 status);
        event ${name}DataPriceChange(uint256 id, uint256 price);
        
        struct Data {
            address owner;
            uint256 id;
            uint256 price;
            bytes32 status;
        }
        
        ${name} public nft;
        
        mapping(uint256 => Data) public datas;
        
        uint256 saleCounter;
        
        constructor(${name} _NFT) public {
            nft = _NFT;
            saleCounter = 0;
        }
        
        function openSale(${name} _NFT, uint256 _id) public {
            Data storage data = datas[_id];
            require(msg.sender == data.owner,"status can only be changed by owner");
            updateStatus(_id, "Open");
            _NFT.transferFrom(msg.sender, address(this), data.id);
            datas[_id].status = "Open";
            emit ${name}DataStatusChange(_id, "Open");
        }
        
        function closeSale(${name} _NFT, uint256 _id) public {
            Data storage data = datas[_id];
            require(msg.sender == data.owner,"status can only be changed by owner");
            updateStatus(_id, "Closed");
            _NFT.transferFrom(msg.sender, address(this), data.id);
            datas[_id].status = "Closed";
            emit ${name}DataStatusChange(_id, "Closed");
        }
        
        function updatePrice(${name} _NFT, uint256 _id, uint256 _price) public {
            address owner = _NFT.ownerOf(_id);
            require(_price > 0, 'price must be greater than 0');
            require(owner == msg.sender, 'owner can only be changed by owner');
            datas[_id].owner = msg.sender;
            emit ${name}DataPriceChange(_id, _price);
        }
        
        function updateStatus(uint256 _id, bytes32 _status) private {
            datas[_id].status = _status;
        }
    }`
}