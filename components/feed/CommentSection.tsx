"use client";

import { useState } from "react";
import CommentItem from "./CommentItem";
import Image from "next/image";

const dummyComments = [
    { id: 1, author: "Alice", avatar: "/assets/images/avatar3.png", text: "Great post!", time: "1 hour ago",
      replies: [
        { id: 1, author: "Bob", avatar: "/assets/images/avatar4.png", text: "Agreed!", time: "30 min ago" }
      ]
    },
];

export default function CommentSection({ postId }: { postId: number }) {
    const [comment, setComment] = useState("");

    const handleSubmit = () => {
        if (!comment.trim()) return;
        console.log("Comment submitted:", comment, "on post:", postId);
        setComment("");
    };

    return (
        <div className="_comment_section">

            {/* Comment Input */}
            <div className="_comment_input_wrap">
                <input
                    type="text"
                    className="_comment_input"
                    placeholder="Write a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                />
                <button type="button" className="_comment_submit_btn" onClick={handleSubmit}>
                    <Image src="/assets/images/send.svg" alt="Send" width={20} height={20} />
                </button>
            </div>

            {/* Comments List */}
            <div className="_comments_list">
                {dummyComments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                ))}
            </div>

        </div>
    );
}