import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationsState {
    notificationsList: Notify[];
}

const initialState: NotificationsState = {
    notificationsList: [],
};

const notifications = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        setNotifications: (state, action: PayloadAction<Notify>) => {
            state.notificationsList.push(action.payload);
        },
        clearNotification: (state, action: PayloadAction<Notify>) => {
            const removeNotification = action.payload.movieId;
            state.notificationsList = state.notificationsList.filter(
                (value) => value.movieId !== removeNotification
            );
        },
    },
});

export default notifications.reducer;
export const { setNotifications, clearNotification } = notifications.actions;
export const selectNotifications = (state: {
    notifications: NotificationsState;
}) => state.notifications.notificationsList;
