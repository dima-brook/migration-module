export default `
address 0x1 {
    module XPNetwork {
        use 0x1::Signer;
        resource struct Details<Coin> {
            denominator: vector<u8>,
            total_supply: u128,
            limited: u8,
            decimals: u8,
            check_token: bool,
            owner: address
        }
        resource struct T<Coin> {
            value: u128
        }
        public fun mint<Coin>(value: u128): T<Coin> {
            T<Coin> {value}
        }
        public fun value<Coin>(coin: &T<Coin>): u128 {
            coin.value
        }
        public fun split<Coin>(coin: T<Coin>, amount: u128): (T<Coin>, T<Coin>) {
            let other = withdraw(&mut coin, amount);
            (coin, other)
        }
        public fun sum<Coin>(coin1: T<Coin>, coin2: T<Coin>): T<Coin> {
            deposit(&mut coin1, coin2);
            coin1
        }
        public fun denominator<Coin>(): vector<u8> acquires Details {
            *&borrow_global<Details<Coin>>(0x1).denominator
        }
        public fun deposit<Coin>(coin: &mut T<Coin>, check: T<Coin>) {
            let T {value} = check;
            coin.value = coin.value + value;
        }
        public fun decimals<Coin>(): u8 acquires Details {
            borrow_global<Details<Coin>>(0x1).decimals
        }
        public fun check_token<Coin>(): bool acquires Details {
            borrow_global<Details<Coin>>(0x1).check_token
        }
        public fun owner<Coin>(): address acquires Details {
            borrow_global<Details<Coin>>(0x1).owner
        }
        public fun total_supply<Coin>(): u128 acquires Details {
            borrow_global<Details<Coin>>(0x1).total_supply
        }
        public fun sign_coin<Coin: copyable>(denominator: vector<u8>, decimals: u8) {
            let sig = create_signer(0x1);
            if (!exists<Details<Coin>>(0x1)) {
                move_to<Details<Coin>>(&sig, Details {
                    denominator,
                    decimals,
                    owner: 0x1,
                    total_supply: 0,
                    check_token: false
                });
            };
            destroy_signer(sig);
        }
        const MINIMUM_DECIMALS : u8 = 0;
        const MAXIMUM_DECIMALS : u8 = 18;
        public fun nft_init<Token: copyable>(
            account: &signer,
            total_supply: u128,
            limited: u8,
            decimals: u8,
            denominator: vector<u8>
        ): T<Token> {
            assert(!exists<Details<Token>>(0x1), 1);
            assert(decimals >= MINIMUM_DECIMALS && decimals <= MAXIMUM_DECIMALS, 20);
            let owner = Signer::address_of(account);
            register_token_info<Token>(Details {
                total_supply,
                owner,
                decimals,
                denominator: copy denominator,
                check_token: true
            });
            T<Token> { value: total_supply }
        }
    }
}`