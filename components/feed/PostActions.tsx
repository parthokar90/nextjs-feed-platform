"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { toggleLike } from "@/services/api/feed/interactions";

type PostActionsProps = {
    postId: number;
    likes: number;
    comments: number;
};

export default function PostActions({ postId, likes, comments }: PostActionsProps) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);
    const [showComments, setShowComments] = useState(false);

    const handleLike = async () => {
        const newLiked = !liked;
        setLiked(newLiked);
        setLikeCount(newLiked ? likeCount + 1 : likeCount - 1);
        try {
            await toggleLike("posts", postId);
            toast.success(newLiked ? "Post liked!" : "Like removed.");
        } catch (err: any) {
            setLiked(!newLiked);
            setLikeCount(newLiked ? likeCount : likeCount + 1);
            toast.error(err?.response?.data?.message || "Failed to update like.");
        }
    };

    return (
        <div className="_post_actions">

            {/* Like */}
            <button
                type="button"
                className={`_action_btn ${liked ? "_liked" : ""}`}
                onClick={handleLike}
            >
                <Image src="/assets/images/like.svg" alt="Like" width={20} height={20} />
                <span>{likeCount}</span>
            </button>

            {/* Comment */}
            <button
                type="button"
                className="_action_btn"
                onClick={() => setShowComments(!showComments)}
            >
                <Image src="/assets/images/comment.svg" alt="Comment" width={20} height={20} />
                <span>{comments}</span>
            </button>

            {/* Share */}
            <button type="button" className="_action_btn">
                <Image src="/assets/images/share.svg" alt="Share" width={20} height={20} />
                <span>Share</span>
            </button>

        </div>
    );
}