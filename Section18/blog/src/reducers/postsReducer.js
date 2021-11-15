export default (state = [], action) => {
    // using switch statement instead of if statement:

    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload
        default:
            return state
    }


    // if statement:

    // if (action.type === "FETCH_POSTS") {
    //     return action.payload
    // }

    // return state
}