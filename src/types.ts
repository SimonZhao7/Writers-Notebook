export interface Note {
    id: string
    categoryId: string
    short: string
    detail: string
    quote: string
    link: string
}

export interface Category {
    id: string
    name: string
}