import { ISolidityGenrator } from '../types'
import solidityNFTContract from './solidityNFTContract'
import { UseCaseEnum } from '../../../enums/useCasesEnum'
import solidityMarketplaceContract from './solidityMarketplaceContract'
// solidity contract generation
export default async (solidityGenerator: ISolidityGenrator) => {
    const { name, useCase } = solidityGenerator
    const code = await solidityNFTContract(solidityGenerator)
    let useCaseContract: string

}

export const solidityUseCaseSwitch = async (solidityGenerator: ISolidityGenrator) => {
    switch(solidityGenerator.useCase) {
        case UseCaseEnum.MARKETPLACE:
            return await solidityMarketplaceContract(solidityGenerator)
    }
}