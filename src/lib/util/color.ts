export default { string2Color }

/**
 * source from https://stackoverflow.com/a/66494926
 */
function string2Color(input: {
    str: string
    alpha?: number
    saturation?: `${string}%`
    lightness?: `${string}%`
}) {
    const { str, alpha = 1, saturation = '45%', lightness = '55%' } = input
    const stringUniqueHash = [...str].reduce((acc, char) => {
        return char.charCodeAt(0) + ((acc << 5) - acc)
    }, 0)
    return `hsla(${stringUniqueHash % 360}, ${lightness}, ${saturation},${alpha})`
}
