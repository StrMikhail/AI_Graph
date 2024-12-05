export const storage = {
    get: (variableName: string) => {
        const data = localStorage.getItem(variableName)
        return data ? JSON.parse(data) : undefined
    },
    getLocalOrDefault: <T>(variableName: string, value: T): T => {
        const data = localStorage.getItem(variableName)
        return data ? JSON.parse(data) : value
    },
    set: (variableName:string, data: unknown) => {
        localStorage.setItem(variableName, JSON.stringify(data))
    }
}
