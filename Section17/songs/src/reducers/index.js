import { combineReducers } from "redux"

const songsReducer = () => {
    return [
        { title: "A Change of Seasons", duration: "25:04" },
        { title: "Lines in the Sand", duration: "12:21" },
        { title: "Hollow Years", duration: "7:12" },
        { title: "Learning to Live", duration: "13:51" }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})