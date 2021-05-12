
# Explanation
In this repo you will find the XP.network Migration Module which is an API endpoint that receives
1. NFT Use Case
2. Business Details
3. Designated Blockchains
4. Compiled/Human-Readable

It responds with production ready smart contracts.

### Tests

<img alt="Logo" align="right" src="https://pbs.twimg.com/profile_images/1383064571427094532/wm13q76p_400x400.jpg" width="20%" />
<img alt="Logo" align="right" src="https://avatars.githubusercontent.com/u/81907112?s=400&u=80a3bfd345f6a6cf4a0ae18438f9dd468ef0d860&v=4" width="20%" />


Generate ERC721 Solidity smart contract and test.
```terminal
yarn install
```
Download [Ganache](https://www.trufflesuite.com/ganache) and run
```terminal
yarn test
```

Generate ERC721 Move smart contract and test
```terminal
TBD
```
Currently you can view the ready XP.network NFT Move ERC721 standard module under
```
src
│   
└───services
    │    
    └───moveMigration
	│   
	└───contracts
	    │   
	    └───modules
		│   
		└───MV721.ts
```

Generate ERC721 Rust smart contract and test
```terminal
TBD
```

#### Scheme
<img src="https://xp.network/2@4.png" />
