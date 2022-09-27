export type DialogNode = {
    text: string,
    options: Array<{
        text: string,
        nextKey: string
    }>
}

export type DialogMap = Record<string, DialogNode>;