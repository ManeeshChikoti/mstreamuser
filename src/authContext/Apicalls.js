import { axiosInstance } from "../axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const loginCall = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axiosInstance.post("auth/login", user);
        dispatch(loginSuccess(res.data))

    } catch (error) {
        dispatch(loginFailure())
    }
}