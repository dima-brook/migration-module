import {Tkn} from './Token.sol';

contract TknData {
    event TknDataStatusChange(uint256 ad, bytes32 status);
    
    struct Data {
        address seller;
        uint256 id;
        uint256 price;
        bytes32 status;
    }
    
    Tkn public nft;
    
    mapping(uint256 => Data) public datas;
    
    uint256 tradeCounter;
    
    constructor(Tkn _NFT) public {
        nft = _NFT;
        tradeCounter = 0;
    }
    
    function initiateTrade(Tkn NFT, uint256 _id) public {
        Data storage data = datas[_id];
        require(msg.sender == data.seller,"status can only be changed by owner");
        updateStatus(_id, "Open");
        NFT.transferFrom(msg.sender, address(this), data.id);
        datas[_id].status = "Open";
        emit TknDataStatusChange(_id, "Open");
    }
    
    function updateStatus(uint256 _id, bytes32 _status) private {
        datas[_id].status = _status;
    }
}