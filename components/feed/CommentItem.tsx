"use client";

import { useState } from "react";
import Image from "next/image";
import ReplyItem from "./ReplyItem";

type Reply = {
    id: number;
    author: string;
    avatar: string;
    text: string;
    time: string;
};

type Comment = {
    id: number;
    author: string;
    avatar: string;
    text: string;
    time: string;
    replies: Reply[];
};

export default function CommentItem({ comment }: { comment: Comment }) {
    const [showReply, setShowReply] = useState(false);
    const [replyText, setReplyText] = useState("");

    const handleReply = () => {
        if (!replyText.trim()) return;
        console.log("Reply:", replyText);
        setReplyText("");
        setShowReply(false);
    };

    return (
        <div className="_comment_item">

            {/* Comment */}
            <div className="_comment_main">
                <Image src={comment.avatar} alt={comment.author} width={36} height={36} className="_comment_avatar" />
                <div className="_comment_content">
                    <h6 className="_comment_author">{comment.author}</h6>
                    <p className="_comment_text">{comment.text}</p>
                    <div className="_comment_footer">
                        <span className="_comment_time">{comment.time}</span>
                        <button type="button" className="_reply_btn" onClick={() => setShowReply(!showReply)}>
                            Reply
                        </button>
                    </div>
                </div>
            </div>

            {/* Reply Input */}
            {showReply && (
                <div className="_reply_input_wrap">
                    <input
                        type="text"
                        className="_reply_input"
                        placeholder={`Reply to ${comment.author}...`}
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleReply()}
                    />
                    <button type="button" className="_reply_submit_btn" onClick={handleReply}>
                        Send
                    </button>
                </div>
            )}

            {/* Replies */}
            {comment.replies.length > 0 && (
                <div className="_replies_list">
                    {comment.replies.map((reply) => (
                        <ReplyItem key={reply.id} reply={reply} />
                    ))}
                </div>
            )}

        </div>
    );
}