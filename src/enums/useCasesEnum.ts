/**
 * NFT use cases enum
 */

 export enum UseCaseEnum {
    MARKETPLACE = "MARKETPLACE",
    CONVERTER = "CONVERTER",
    INDEX = "INDEX",
    INSURANCE = "INSURANCE",
    ROROB = "ROROB",
    ROYALTIES = "ROYALTIES",
    FRACTIONALIZATION = "FRACTIONALIZATION",
    LENDING_BORROWING = "LENDING_BORROWING",
    LICENSING = "LICENSING",
    LOTTERY = "LOTTERY",
    SUCCESSION = "SUCCESSION",
    PATENTS = "PATENTS",
    BRAND_PROTECTION = "BRAND_PROTECTION",
    TICKETS = "TICKETS",
    NON_CUSTODIAL_LOGIN = "NON_CUSTODIAL_LOGIN",
    RE_USABLE_KYC = "RE_USABLE_KYC",
};

/**
 * Allows to edit enum without rewriting dependant schemas;
 */
export function* UseCaseEnumSpread(){
    yield UseCaseEnum.MARKETPLACE;
    yield UseCaseEnum.CONVERTER;
    yield UseCaseEnum.INDEX;
    yield UseCaseEnum.INSURANCE;
    yield UseCaseEnum.ROROB;
    yield UseCaseEnum.ROYALTIES;
    yield UseCaseEnum.FRACTIONALIZATION;
    yield UseCaseEnum.LENDING_BORROWING;
    yield UseCaseEnum.LICENSING;
    yield UseCaseEnum.LOTTERY;
    yield UseCaseEnum.PATENTS;
    yield UseCaseEnum.BRAND_PROTECTION;
    yield UseCaseEnum.TICKETS;
    yield UseCaseEnum.NON_CUSTODIAL_LOGIN;
    yield UseCaseEnum.RE_USABLE_KYC;
}