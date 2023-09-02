"use client";

import Notifications from "../component/notifications";
import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <Notifications />
            {children}
        </Provider>
    );
}
