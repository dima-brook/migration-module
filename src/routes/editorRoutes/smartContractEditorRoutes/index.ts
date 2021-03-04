import { Express } from 'express'

export default (app: Express) => {
    generateContract(app, '/smtr/generate')
}

const generateContract = (app: Express, route: string) => {
    app.post(route, async (req: any, res: any) => {
        const {  } = req.body
        
    })
}