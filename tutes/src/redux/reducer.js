const addReducer = (state = 0, action) => {

    if (action.type === "addition") {
        var sum = action.payload.a + action.payload.b
    }

    return sum
}

export default addReducer