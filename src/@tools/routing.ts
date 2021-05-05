import { ValidationError } from "./errors"

export const failedBody = (body?: any) => {
    return { o: false, body }
}

export const successfulBody = (body?: any) => {
    return { o: true, body }
}

export function errorHandler (err: any, req: any, res: any, next: any) {
    console.log(err)
    if (err instanceof ValidationError) {
        res.send({ ok: false, result: err.message })
    } else {
        res.status(500)
        res.send(failedBody('500 Internal Server Error'))
    }
}