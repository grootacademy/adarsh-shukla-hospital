const addAction = (a, b) => {
    return {
        type: "addition",
        payload: { a, b }
    }
}

export { addAction }