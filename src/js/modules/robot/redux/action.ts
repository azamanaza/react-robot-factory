import { APP_LOADING } from "./action-types";

export const appLoading = (state: boolean) => {
    return {
        type: APP_LOADING,
        payload: {
            state: state
        }
    }
}