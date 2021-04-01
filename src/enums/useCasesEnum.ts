/**
 * NFT use cases enum
 */

 export enum UseCaseEnum {
    MARKETPLACE = "MARKETPLACE",
};

/**
 * Allows to edit enum without rewriting dependant schemas;
 */
export function* UseCaseEnumSpread(){
    yield UseCaseEnum.MARKETPLACE;

}