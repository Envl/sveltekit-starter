/**
 * helper functions for array
 */

export default {
    dedupe,
    fillEach,
    len,
    pickRandom,
    pushDistinct,
}

function dedupe<T = any>(input: { arr: Array<T>; getKey: (a: T) => string }) {
    const { arr, getKey } = input
    const set = new Set()
    const result: T[] = []
    arr.forEach((item) => {
        const key = getKey(item)
        if (!set.has(key)) {
            set.add(key)
            result.push(item)
        }
    })
    return result
}

// push if only doesn't exist in list
function pushDistinct<T = any>(input: {
    arr: Array<T>
    item: T
    getIdentifier?: (i: T) => string | number
}) {
    const getIdentifier = input.getIdentifier ?? ((i: any & { id: string | number }) => i.id)
    const found = input.arr.find((i) => getIdentifier(i) === getIdentifier(input.item))

    if (!found) {
        input.arr.push(input.item)
    }

    return input.arr
}

/**
 * generate list with given length
 */
function len(input: { length: number; fill?: any }) {
    return Array(input.length).fill(input.fill ?? 0)
}

function pickRandom(arr: any[]) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function fillEach(input: { length: number; fillValue: <T = any>(idx: number) => T }) {
    return Array(input.length)
        .fill(0)
        .map((_, i) => {
            return input.fillValue(i)
        })
}
