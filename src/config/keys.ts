
export const MONGO_URI: string = process.env.MONGO_URI || 'mongodb://localhost:27017/xpnetwork'

export const PORT: string = process.env.PORT || '3777'
export const LOGIN_SALT: string = process.env.LOGIN_SALT || '1'
export const IS_PROD: boolean = process.env.NODE_ENV === 'production'

export const SECRET_KEY: string = process.env.SECRET_KEY || '111'

export const MONGO_COLLECTIONS = {
    Users: 'Users'.toLowerCase(),
    RefreshTokens: 'RefreshTokens'.toLowerCase(),
    PasswordResets: 'PasswordResets'.toLowerCase(),

    Migrators: 'Migrators'.toLowerCase(),
    Apps: 'Apps'.toLowerCase(),

}