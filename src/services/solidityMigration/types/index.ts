//types for the solidty migration module

// full input of from the application editor
export interface ISolidityGenrator {
    name: string
    symbol: string
    limited: number
    contractFunctionality: IContractFunctionality[]
}

// singular functionality received from the application editor
export interface IContractFunctionality {

}