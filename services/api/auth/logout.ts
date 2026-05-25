import api from "../client";

export const logout = async () => {
    const response = await api.post("/logout");
    return response.data;
};