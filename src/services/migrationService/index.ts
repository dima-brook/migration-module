import { IGenerator } from './types'

export class MigrationModule {
    generator: IGenerator
    constructor(generator: IGenerator) {
        this.generator = generator
    }
    
}