import { createSlice } from '@reduxjs/toolkit'


const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        setNotification(state, action) {
            return action.payload
        },
        deleteNotif(state, action) {
            return null
        }
    }
})


export const { setNotification, deleteNotif } = notificationSlice.actions

export const setNotif = (content, time) => {
    return async dispatch => {
        dispatch(setNotification(content))
        let timeout = setTimeout(() => {
            dispatch(deleteNotif())
        }, time*1000)
        clearTimeout(timeout-1)
    }
}

export default notificationSlice.reducer