const randomMap = new Map<string | number | Symbol, number>()

export default {
    int(input: { len: number }) {
        return Math.floor(Math.random() * 10 ** input.len)
    },

    str() {
        return Math.random().toString(36).slice(2, 7)
    },

    halfhalf() {
        return Math.random() > 0.5
    },

    forID(input: { id: string | number | Symbol; newResult: any }): any {
        const result = randomMap.get(input.id)
        if (result) {
            return result
        }

        if (input.newResult) {
            randomMap.set(input.id, input.newResult)
            return input.newResult
        }

        const num = Math.random()
        randomMap.set(input.id, num)

        return num
    },
}
