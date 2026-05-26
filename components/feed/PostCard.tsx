"use client";

import { useEffect, useRef, useState } from "react";
import { toggleLike, addComment, deleteComment, addReply, deleteReply, getLikes } from "@/services/api/feed/interactions";
import { useRouter } from "next/navigation";

type User = { id: number; name: string; avatar: string | null };
type Reply = { id: number; body: string; likes_count: number; is_liked: boolean; is_owner: boolean; user: User; created_at: string };
type Comment = { id: number; body: string; likes_count: number; replies_count: number; is_liked: boolean; is_owner: boolean; user: User; created_at: string; replies: Reply[] };
type Post = {
    id: number; title: string; visibility: string; likes_count: number; comments_count: number;
    is_liked: boolean; is_owner: boolean; user: User; created_at: string;
    images: { id: number; url: string }[];
    comments: Comment[];
};

export default function PostCard({ post: initialPost }: { post: Post }) {
    const router = useRouter();
    const [post, setPost] = useState(initialPost);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [showLikers, setShowLikers] = useState(false);
    const [likers, setLikers] = useState<User[]>([]);
    const [commentText, setCommentText] = useState("");
    const [replyText, setReplyText] = useState<Record<number, string>>({});
    const [showReplies, setShowReplies] = useState<Record<number, boolean>>({});
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ── Like handlers ──────────────────────────────────────────

    const handlePostLike = async () => {
        const prev = { liked: post.is_liked, count: post.likes_count };
        // Optimistic update
        setPost(p => ({ ...p, is_liked: !p.is_liked, likes_count: p.is_liked ? p.likes_count - 1 : p.likes_count + 1 }));
        try {
            await toggleLike("posts", post.id);
        } catch {
            setPost(p => ({ ...p, is_liked: prev.liked, likes_count: prev.count }));
        }
    };

    const handleCommentLike = async (commentId: number) => {
        setPost(p => ({
            ...p,
            comments: p.comments.map(c =>
                c.id === commentId
                    ? { ...c, is_liked: !c.is_liked, likes_count: c.is_liked ? c.likes_count - 1 : c.likes_count + 1 }
                    : c
            ),
        }));
        try { await toggleLike("comments", commentId); }
        catch { router.refresh(); }
    };

    const handleReplyLike = async (commentId: number, replyId: number) => {
        setPost(p => ({
            ...p,
            comments: p.comments.map(c =>
                c.id === commentId
                    ? { ...c, replies: c.replies.map(r => r.id === replyId ? { ...r, is_liked: !r.is_liked, likes_count: r.is_liked ? r.likes_count - 1 : r.likes_count + 1 } : r) }
                    : c
            ),
        }));
        try { await toggleLike("replies", replyId); }
        catch { router.refresh(); }
    };

    // ── Who liked ──────────────────────────────────────────────

    const handleShowLikers = async () => {
        if (showLikers) { setShowLikers(false); return; }
        const data = await getLikes("posts", post.id);
        setLikers(data.data);
        setShowLikers(true);
    };

    // ── Comment handlers ───────────────────────────────────────

    const handleAddComment = async () => {
        if (!commentText.trim()) return;
        try {
            const data = await addComment(post.id, commentText);
            setPost(p => ({
                ...p,
                comments: [data.data, ...p.comments],
                comments_count: p.comments_count + 1,
            }));
            setCommentText("");
        } catch { router.refresh(); }
    };

    const handleDeleteComment = async (commentId: number) => {
        try {
            await deleteComment(commentId);
            setPost(p => ({
                ...p,
                comments: p.comments.filter(c => c.id !== commentId),
                comments_count: p.comments_count - 1,
            }));
        } catch { router.refresh(); }
    };

    // ── Reply handlers ─────────────────────────────────────────

    const handleAddReply = async (commentId: number) => {
        const body = replyText[commentId]?.trim();
        if (!body) return;
        try {
            const data = await addReply(commentId, body);
            setPost(p => ({
                ...p,
                comments: p.comments.map(c =>
                    c.id === commentId
                        ? { ...c, replies: [...(c.replies || []), data.data], replies_count: c.replies_count + 1 }
                        : c
                ),
            }));
            setReplyText(prev => ({ ...prev, [commentId]: "" }));
        } catch { router.refresh(); }
    };

    const handleDeleteReply = async (commentId: number, replyId: number) => {
        try {
            await deleteReply(replyId);
            setPost(p => ({
                ...p,
                comments: p.comments.map(c =>
                    c.id === commentId
                        ? { ...c, replies: c.replies.filter(r => r.id !== replyId), replies_count: c.replies_count - 1 }
                        : c
                ),
            }));
        } catch { router.refresh(); }
    };

    return (
        <div className="_feed_inner_timeline_post_area _b_radious6 _padd_b24 _padd_t24 _mar_b16">
            <div className="_feed_inner_timeline_content _padd_r24 _padd_l24">
                {/* Post Header */}
                <div className="_feed_inner_timeline_post_top">
                    <div className="_feed_inner_timeline_post_box">
                        <div className="_feed_inner_timeline_post_box_image">
                            <img src={post.user?.avatar ?? "/assets/images/post_img.png"} alt={post.user?.name} className="_post_img" />
                        </div>
                        <div className="_feed_inner_timeline_post_box_txt">
                            <h4 className="_feed_inner_timeline_post_box_title">{post.user?.name}</h4>
                            <p className="_feed_inner_timeline_post_box_para">
                                {post.created_at} · <a href="#0">{post.visibility}</a>
                            </p>
                        </div>
                    </div>

                    {/* Dropdown */}
                    <div ref={dropdownRef} className="_feed_inner_timeline_post_box_dropdown">
                        <div className="_feed_timeline_post_dropdown">
                            <button className="_feed_timeline_post_dropdown_link" onClick={(e) => { e.stopPropagation(); setOpenDropdown(p => !p); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="17" fill="none" viewBox="0 0 4 17">
                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                    <circle cx="2" cy="8" r="2" fill="#C4C4C4" />
                                    <circle cx="2" cy="15" r="2" fill="#C4C4C4" />
                                </svg>
                            </button>
                        </div>
                        {openDropdown && (
                            <div className="_feed_timeline_dropdown _timeline_dropdown">
                                <ul className="_feed_timeline_dropdown_list">
                                    <li className="_feed_timeline_dropdown_item">
                                        <a href="#0" className="_feed_timeline_dropdown_link">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18"><path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M14.25 15.75L9 12l-5.25 3.75v-12a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5v12z" /></svg></span>
                                            Save Post
                                        </a>
                                    </li>
                                    {post.is_owner && (
                                        <li className="_feed_timeline_dropdown_item">
                                            <a href="#0" className="_feed_timeline_dropdown_link">
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18"><path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M2.25 4.5h13.5M6 4.5V3a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0112 3v1.5m2.25 0V15a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5V4.5h10.5z" /></svg></span>
                                                Delete Post
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Post Content */}
                <h4 className="_feed_inner_timeline_post_title">{post.title}</h4>
                {post.images?.length > 0 && (
                    <div className="_feed_inner_timeline_image">
                        <img src={post.images[0].url} alt="post" className="_time_img" />
                    </div>
                )}
            </div>

            {/* Reacts Count */}
            <div className="_feed_inner_timeline_total_reacts _padd_r24 _padd_l24 _mar_b26">
                <div className="_feed_inner_timeline_total_reacts_image" style={{ cursor: "pointer" }} onClick={handleShowLikers}>
                    <img src="assets/images/react_img1.png" alt="" className="_react_img1" />
                    <img src="assets/images/react_img2.png" alt="" className="_react_img" />
                    <p className="_feed_inner_timeline_total_reacts_para">{post.likes_count}</p>
                </div>
                <div className="_feed_inner_timeline_total_reacts_txt">
                    <p className="_feed_inner_timeline_total_reacts_para1">
                        <a href="#0"><span>{post.comments_count}</span> Comment</a>
                    </p>
                </div>
            </div>

            {/* Who liked — toggle */}
            {showLikers && likers.length > 0 && (
                <div className="_padd_r24 _padd_l24" style={{ marginBottom: 12 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Liked by:</p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {likers.map(u => (
                            <div key={u.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                <img src={u.avatar ?? "/assets/images/post_img.png"} alt={u.name} style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover" }} />
                                <span style={{ fontSize: 13 }}>{u.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Reaction Buttons */}
            <div className="_feed_inner_timeline_reaction">
                {/* Like button — active state */}
                <button
                    className={`_feed_inner_timeline_reaction_emoji _feed_reaction ${post.is_liked ? "_feed_reaction_active" : ""}`}
                    onClick={handlePostLike}
                >
                    <span className="_feed_inner_timeline_reaction_link"><span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 19 19">
                            <path fill="#FFCC4D" d="M9.5 19a9.5 9.5 0 100-19 9.5 9.5 0 000 19z" />
                            <path fill="#664500" d="M9.5 11.083c-1.912 0-3.181-.222-4.75-.527-.358-.07-1.056 0-1.056 1.055 0 2.111 2.425 4.75 5.806 4.75 3.38 0 5.805-2.639 5.805-4.75 0-1.055-.697-1.125-1.055-1.055-1.57.305-2.838.527-4.75.527z" />
                            <path fill="#fff" d="M4.75 11.611s1.583.528 4.75.528 4.75-.528 4.75-.528-1.056 2.111-4.75 2.111-4.75-2.11-4.75-2.11z" />
                            <path fill="#664500" d="M6.333 8.972c.729 0 1.32-.827 1.32-1.847s-.591-1.847-1.32-1.847c-.729 0-1.32.827-1.32 1.847s.591 1.847 1.32 1.847zM12.667 8.972c.729 0 1.32-.827 1.32-1.847s-.591-1.847-1.32-1.847c-.729 0-1.32.827-1.32 1.847s.591 1.847 1.32 1.847z" />
                        </svg>
                        {post.is_liked ? "Liked" : "Like"}
                    </span></span>
                </button>

                <button className="_feed_inner_timeline_reaction_comment _feed_reaction">
                    <span className="_feed_inner_timeline_reaction_link"><span>
                        <svg className="_reaction_svg" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
                            <path stroke="#000" d="M1 10.5c0-.464 0-.696.009-.893A9 9 0 019.607 1.01C9.804 1 10.036 1 10.5 1v0c.464 0 .696 0 .893.009a9 9 0 018.598 8.598c.009.197.009.429.009.893v6.046c0 1.36 0 2.041-.317 2.535a2 2 0 01-.602.602c-.494.317-1.174.317-2.535.317H10.5c-.464 0-.696 0-.893-.009a9 9 0 01-8.598-8.598C1 11.196 1 10.964 1 10.5v0z" />
                            <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M6.938 9.313h7.125M10.5 14.063h3.563" />
                        </svg>
                        Comment
                    </span></span>
                </button>

                <button className="_feed_inner_timeline_reaction_share _feed_reaction">
                    <span className="_feed_inner_timeline_reaction_link"><span>
                        <svg className="_reaction_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="21" fill="none" viewBox="0 0 24 21">
                            <path stroke="#000" strokeLinejoin="round" d="M23 10.5L12.917 1v5.429C3.267 6.429 1 13.258 1 20c2.785-3.52 5.248-5.429 11.917-5.429V20L23 10.5z" />
                        </svg>
                        Share
                    </span></span>
                </button>
            </div>

            {/* Comment Input */}
            <div className="_feed_inner_timeline_cooment_area">
                <div className="_feed_inner_comment_box">
                    <div className="_feed_inner_comment_box_form">
                        <div className="_feed_inner_comment_box_content">
                            <div className="_feed_inner_comment_box_content_image">
                                <img src="assets/images/comment_img.png" alt="" className="_comment_img" />
                            </div>
                            <div className="_feed_inner_comment_box_content_txt">
                                <textarea
                                    className="form-control _comment_textarea"
                                    placeholder="Write a comment"
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleAddComment(); } }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comments List */}
            <div className="_timline_comment_main">
                {post.comments?.map(comment => (
                    <div key={comment.id} className="_comment_main" style={{ marginBottom: 16 }}>
                        <div className="_comment_image">
                            <img src={comment.user?.avatar ?? "/assets/images/txt_img.png"} alt="" className="_comment_img1" />
                        </div>
                        <div className="_comment_area">
                            <div className="_comment_details">
                                <div className="_comment_details_top">
                                    <div className="_comment_name">
                                        <h4 className="_comment_name_title">{comment.user?.name}</h4>
                                    </div>
                                </div>
                                <div className="_comment_status">
                                    <p className="_comment_status_text"><span>{comment.body}</span></p>
                                </div>

                                {/* Comment reactions */}
                                <div className="_comment_reply">
                                    <div className="_comment_reply_num">
                                        <ul className="_comment_reply_list">
                                            <li>
                                                <span
                                                    style={{ cursor: "pointer", color: comment.is_liked ? "#377DFF" : undefined }}
                                                    onClick={() => handleCommentLike(comment.id)}
                                                >
                                                    Like ({comment.likes_count})
                                                </span>
                                            </li>
                                            <li>
                                                <span
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => setShowReplies(p => ({ ...p, [comment.id]: !p[comment.id] }))}
                                                >
                                                    Reply ({comment.replies_count})
                                                </span>
                                            </li>
                                            {comment.is_owner && (
                                                <li>
                                                    <span style={{ cursor: "pointer", color: "red" }} onClick={() => handleDeleteComment(comment.id)}>
                                                        Delete
                                                    </span>
                                                </li>
                                            )}
                                            <li><span className="_time_link">{comment.created_at}</span></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Replies */}
                                {showReplies[comment.id] && (
                                    <div style={{ marginLeft: 24, marginTop: 8 }}>
                                        {/* Reply input */}
                                        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                                            <textarea
                                                className="form-control _comment_textarea"
                                                placeholder="Write a reply..."
                                                value={replyText[comment.id] ?? ""}
                                                onChange={(e) => setReplyText(p => ({ ...p, [comment.id]: e.target.value }))}
                                                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleAddReply(comment.id); } }}
                                                style={{ flex: 1 }}
                                            />
                                        </div>

                                        {/* Reply list */}
                                        {comment.replies?.map(reply => (
                                            <div key={reply.id} className="_comment_main" style={{ marginBottom: 8 }}>
                                                <div className="_comment_image">
                                                    <img src={reply.user?.avatar ?? "/assets/images/txt_img.png"} alt="" className="_comment_img1" />
                                                </div>
                                                <div className="_comment_area">
                                                    <div className="_comment_details">
                                                        <h4 className="_comment_name_title" style={{ fontSize: 13 }}>{reply.user?.name}</h4>
                                                        <p className="_comment_status_text"><span>{reply.body}</span></p>
                                                        <ul className="_comment_reply_list">
                                                            <li>
                                                                <span
                                                                    style={{ cursor: "pointer", color: reply.is_liked ? "#377DFF" : undefined }}
                                                                    onClick={() => handleReplyLike(comment.id, reply.id)}
                                                                >
                                                                    Like ({reply.likes_count})
                                                                </span>
                                                            </li>
                                                            {reply.is_owner && (
                                                                <li>
                                                                    <span style={{ cursor: "pointer", color: "red" }} onClick={() => handleDeleteReply(comment.id, reply.id)}>
                                                                        Delete
                                                                    </span>
                                                                </li>
                                                            )}
                                                            <li><span className="_time_link">{reply.created_at}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}