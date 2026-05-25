import api from "../client";

interface RegisterPayload {
    email: string;
    password: string;
    password_confirmation: string;
}

export const register = async (payload: RegisterPayload) => {
    const response = await api.post("/register", payload);
    return response.data;
};