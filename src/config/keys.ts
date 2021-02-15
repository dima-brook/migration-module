
export const MONGO_URI: string = process.env.MONGO_URI || 'mongodb://localhost:27017/xpnetwork'

export const PORT: string = process.env.PORT || '3777'
export const LOGIN_SALT: string = process.env.LOGIN_SALT || '1'
export const IS_PROD: boolean = process.env.NODE_ENV === 'production'

export const SECRET_KEY: string = process.env.SECRET_KEY || '111'

export const MONGO_COLLECTIONS = {
    Organizations: 'Organizations'.toLowerCase(),
    UserPermissions: 'UserPermissions'.toLowerCase(),
    Users: 'Users'.toLowerCase(),
    RefreshTokens: 'RefreshTokens'.toLowerCase(),
    TwofaCodes: 'TwofaCodes'.toLowerCase(),
    UserAuthorizedIPs: 'UserAuthorizedIPs'.toLowerCase(),
    UserLogs: 'UserLogs'.toLowerCase(),
    Logs: 'Logs'.toLowerCase(),
    LoginBlocks: 'LoginBlocks'.toLowerCase(),
    PasswordResets: 'PasswordResets'.toLowerCase(),

    Contacts: 'Contacts'.toLowerCase(),
    ContactPaymentTypes: 'ContactPaymentTypes'.toLowerCase(),
    Boxes: 'Boxes'.toLowerCase(),
    ContactFormViews: 'ContactFormViews'.toLowerCase(),
    ContactPayments: 'ContactPayments'.toLowerCase(),
    ContactFields: 'ContactFields'.toLowerCase(),
    ContactTypes: 'ContactTypes'.toLowerCase(),

    Fields: 'Fields'.toLowerCase(),
}