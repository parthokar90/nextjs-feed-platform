// components/feed/PostCard.tsx

import Image from "next/image";
import PostActions from "./PostActions";
import CommentSection from "./CommentSection";

// Type define 
type Post = {
    id: number;
    author: string;
    avatar: string;
    content: string;
    image: string;
    likes: number;
    comments: number;
    time: string;
};

export default function PostCard({ post }: { post: Post }) {
    return (
        <div className="_post_card">

            {/* Post Header */}
            <div className="_post_header">
                <Image
                    src={post.avatar}
                    alt={post.author}
                    width={44}
                    height={44}
                    className="_post_avatar"
                />
                <div className="_post_author_info">
                    <h6 className="_post_author_name">{post.author}</h6>
                    <span className="_post_time">{post.time}</span>
                </div>
            </div>

            {/* Post Content */}
            <div className="_post_body">
                <p className="_post_text">{post.content}</p>

                {/* If post found show the post */}
                {post.image && (
                    <div className="_post_image_wrap">
                        <Image
                            src={post.image}
                            alt="Post"
                            width={600}
                            height={400}
                            className="_post_image"
                        />
                    </div>
                )}
            </div>

            {/* Like, Comment, Share */}
            <PostActions postId={post.id} likes={post.likes} comments={post.comments} />

            {/* Comments */}
            <CommentSection postId={post.id} />

        </div>
    );
}