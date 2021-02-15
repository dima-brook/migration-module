import * as cookieParser from 'cookie-parser'
import * as moment from 'moment'
import * as path from 'path'
import * as compression from 'compression'
import * as bodyParser from 'body-parser'
import { Express } from 'express'
import * as express from 'express'

export default (app: Express) => {
    const publicPath = path.join(__dirname, '../../public')

    app.use(compression())
    app.use(cookieParser())
    app.use(bodyParser.json({ limit: '50mb' }))
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use('/public', express.static(publicPath))

    app.use((req: any, res: any, next: any) => {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR, access-token")
        if (req.headers.origin) {
            res.header('Access-Control-Allow-Origin', '*')
        }
        if (req.method === 'OPTIONS') {
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
            return res.status(200).json({})
        }
        next()
    })
}