export const endocdeCategory = (value: string): string => {
    return value
        .split('')
        .map((chr: string) => (chr === ' ' ? '-' : chr))
        .join()
        .toLowerCase()
}

export const decodeCategory = (value: string): string => {
    const words = value.split('-')
    return words
        .map((word: string) => word.slice(0, 1).toUpperCase() + word.slice(1))
        .join(' ')
}
