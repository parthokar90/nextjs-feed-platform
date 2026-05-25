import api from "../client";

export const me = async () => {
    const response = await api.get("/me");
    return response.data; 
};