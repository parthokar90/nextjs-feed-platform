import api from "../client";

export const createPost = async (formData: FormData) => {
    const response = await api.post("/posts", formData, {
        headers: {
            "Content-Type": "multipart/form-data", 
        },
    });
    return response.data;
};