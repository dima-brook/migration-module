export default `address 0x1 {

    module XPNetwork {
    
        use 0x1::Event;
        use 0x1::Signer;
    
        const ZERO_DEP_ERROR: u64 = 505;
        const CANNOT_WITHDRAW_ERROR: u64 = 506;
        const WRONG_TOTAL_SUPPLY: u64 = 507;
    
        resource struct T<Coin> {
            value: u128
        }
    
        resource struct Info<Coin> {
            denom: vector<u8>,
            decimals: u8,
            is_token: bool,
            is_nft: bool,
            owner: address,
            total_supply: u128
        }
    
        resource struct NFTInfo<Coin> {
            metadata: vector<u8>,
        }
    
        public fun mint<Coin>(value: u128): T<Coin> {
            T<Coin> { value }
        }
    
        public fun destroy_zero<Coin>(coin: T<Coin>) {
            let T { value } = coin;
            assert(value == 0, ZERO_DEP_ERROR)
        }
    
        public fun value<Coin>(coin: &T<Coin>): u128 {
            coin.value
        }
    
        public fun zero<Coin>(): T<Coin> {
            T<Coin> { value: 0 }
        }
    
        public fun split<Coin>(coin: T<Coin>, amount: u128): (T<Coin>, T<Coin>) {
            let other = withdraw(&mut coin, amount);
            (coin, other)
        }
    
        public fun join<Coin>(coin1: T<Coin>, coin2: T<Coin>): T<Coin> {
            deposit(&mut coin1, coin2);
            coin1
        }
    
        public fun deposit<Coin>(coin: &mut T<Coin>, check: T<Coin>) {
            let T { value } = check; // destroy check
            coin.value = coin.value + value;
        }
    
        public fun withdraw<Coin>(coin: &mut T<Coin>, amount: u128): T<Coin> {
            assert(coin.value >= amount, CANNOT_WITHDRAW_ERROR);
            coin.value = coin.value - amount;
            T { value: amount }
        }
    
        public fun denom<Coin>(): vector<u8> acquires Info {
            *&borrow_global<Info<Coin>>(0x1).denom
        }
    
        public fun decimals<Coin>(): u8 acquires Info {
            borrow_global<Info<Coin>>(0x1).decimals
        }
    
        public fun is_token<Coin>(): bool acquires Info {
            borrow_global<Info<Coin>>(0x1).is_token
        }
    
        public fun is_nft<Coin>(): bool acquires Info {
            borrow_global<Info<Coin>>(0x1).is_nft
        }
    
        public fun metadata<Coin>(): vector<u8> acquires NFTInfo {
            *&borrow_global<NFTInfo<Coin>>(0x1).metadata
        }
    
        public fun total_supply<Coin>(): u128 acquires Info {
            borrow_global<Info<Coin>>(0x1).total_supply
        }
    
        public fun owner<Coin>(): address acquires Info {
            borrow_global<Info<Coin>>(0x1).owner
        }
    
        public fun register_coin<Coin: copyable>(denom: vector<u8>, decimals: u8) {
            let sig = create_signer(0x1);
    
            if (!exists<Info<Coin>>(0x1)) {
                move_to<Info<Coin>>(&sig, Info {
                    denom,
                    decimals,
                    owner: 0x1,
                    total_supply: 0,
                    is_token: false,
                    is_nft: false,
                });
            };
    
            destroy_signer(sig);
        }
    
    
        const MIN_DECIMALS : u8 = 0;
        const MAX_DECIMALS : u8 = 18;
    
        struct TokenCreatedEvent<Tok> {
            creator: address,
            total_supply: u128,
            denom: vector<u8>,
            decimals: u8,
            is_nft: bool,
        }
    
        struct NFTCreatedEvent<Tok> {
            metadata: vector<u8>,
        }
    
        public fun create_token<Tok: copyable>(
            account: &signer,
            total_supply: u128,
            decimals: u8,
            denom: vector<u8>
        ): T<Tok> {
    
            assert(!exists<Info<Tok>>(0x1), 1);
    
            assert(decimals >= MIN_DECIMALS && decimals <= MAX_DECIMALS, 20);
            assert(total_supply > 0, WRONG_TOTAL_SUPPLY);
    
            let owner = Signer::address_of(account);
    
            register_token_info<Tok>(Info {
                denom: copy denom,
                decimals,
                owner,
                total_supply,
                is_token: true,
                is_nft: false,
            });
    
            Event::emit<TokenCreatedEvent<Tok>>(
                account,
                TokenCreatedEvent {
                    creator: owner,
                    total_supply,
                    decimals,
                    denom,
                    is_nft: false,
                }
            );
    
            T<Tok> { value: total_supply }
        }
    
        public fun create_nft<Tok: copyable>(
            account: &signer,
            total_supply: u128,
            denom: vector<u8>,
            metadata: vector<u8>,
        ): T<Tok> {
    
            assert(!exists<Info<Tok>>(0x1), 1);
            assert(!exists<NFTInfo<Tok>>(0x01), 2);
    
            assert(total_supply >= 0, WRONG_TOTAL_SUPPLY);
    
            let owner = Signer::address_of(account);
    
            register_token_info<Tok>(Info {
                denom: copy denom,
                decimals: 0,
                owner,
                total_supply,
                is_token: true,
                is_nft: true,
            });
    
            register_nft_info<Tok>(NFTInfo {
                metadata: copy metadata,
            });
    
            Event::emit<TokenCreatedEvent<Tok>>(
                account,
                TokenCreatedEvent {
                    creator: owner,
                    total_supply,
                    decimals: 0,
                    denom,
                    is_nft: false,
                }
            );
    
            Event::emit<NFTCreatedEvent<Tok>>(
                account,
                NFTCreatedEvent {
                    metadata,
                }
            );
    
            T<Tok> { value: total_supply }
        }
    
        fun register_token_info<Coin: copyable>(info: Info<Coin>) {
            let sig = create_signer(0x1);
            move_to<Info<Coin>>(&sig, info);
            destroy_signer(sig);
        }
    
        fun register_nft_info<Coin: copyable>(info: NFTInfo<Coin>) {
            let sig = create_signer(0x1);
            move_to<NFTInfo<Coin>>(&sig, info);
            destroy_signer(sig);
        }
    
        native fun create_signer(addr: address): signer;
        native fun destroy_signer(sig: signer);
    }
    }`