import api from "../client";

export const toggleLike = async (type: "posts" | "comments" | "replies", id: number) => {
    const response = await api.post(`/${type}/${id}/like`);
    return response.data; // { liked, likes_count }
};

export const getLikes = async (type: "posts" | "comments" | "replies", id: number) => {
    const response = await api.get(`/${type}/${id}/likes`);
    return response.data;
};

export const addComment = async (postId: number, body: string) => {
    const response = await api.post(`/posts/${postId}/comments`, { body });
    return response.data;
};

export const deleteComment = async (commentId: number) => {
    const response = await api.delete(`/comments/${commentId}`);
    return response.data;
};

export const addReply = async (commentId: number, body: string) => {
    const response = await api.post(`/comments/${commentId}/replies`, { body });
    return response.data;
};

export const deleteReply = async (replyId: number) => {
    const response = await api.delete(`/replies/${replyId}`);
    return response.data;
};