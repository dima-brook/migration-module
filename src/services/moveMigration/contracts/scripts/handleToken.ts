export default `script {
    use 0x01::XPNetwork;
    use 0x01::Account;
    use {{sender}}::NFTToken;    

    fun new_token(account: &signer) {
        let supply = 1;

        let denom = b"4261746d616e";
        let metadata = b"68747470733a2f2f676f6f676c652e636f6d";
        let my_nft = XPNetwork::create_nft<NFTToken::NFT>(account, supply, denom, metadata);

        Account::deposit_to_sender(account, my_nft);
    }
}`