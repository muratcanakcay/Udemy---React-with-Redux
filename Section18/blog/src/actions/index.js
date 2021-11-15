import jsonPlaceholder from "../apis/jsonPlaceholder"

// WRONG WAY TO DO IT:

// export const fetchPosts = async () => {
//     const response = await jsonPlaceholder.get("/posts")

//     return {
//         type: "FETCH_POSTS",
//         payload: response
//     }
// }


// CORRECT WAY WITH THUNK:

// export const fetchPosts = () => {
//     return async (dispatch, getState) => {
//         const response = await jsonPlaceholder.get("/posts")

//         dispatch({
//             type: "FETCH_POSTS",
//             payload: response
//         })
//     }
// }

// REFACTORED TO:

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts")

    dispatch({ type: "FETCH_POSTS", payload: response.data })
}

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: "FETCH_USER", payload: response.data })
}