export const lookUp = (
    from: string,
    localField: string,
    foreignField: string,
    as: string
) => ({$lookup: { from, localField, foreignField, as }})

export const unwind = (
    path: string,
    preserveNullAndEmptyArrays: boolean,
    ) => ({$unwind: { path, preserveNullAndEmptyArrays }})

export const lookUpPipeline = (
        from: string,
        as: string,
        pipeline: any
) => ({$lookup: { from, as, pipeline }})
export const lookUpUnwind = (
    from: string,
    localField: string,
    foreignField: string,
    as: string,
    preserveNullAndEmptyArrays
) => 
[
    lookUp(
        from,
        localField,
        foreignField,
        as
    ),
    unwind(
        '$' + as,
        preserveNullAndEmptyArrays
    )
]