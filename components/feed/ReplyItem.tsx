import Image from "next/image";

type Reply = {
    id: number;
    author: string;
    avatar: string;
    text: string;
    time: string;
};

export default function ReplyItem({ reply }: { reply: Reply }) {
    return (
        <div className="_reply_item">
            <Image src={reply.avatar} alt={reply.author} width={30} height={30} className="_reply_avatar" />
            <div className="_reply_content">
                <h6 className="_reply_author">{reply.author}</h6>
                <p className="_reply_text">{reply.text}</p>
                <span className="_reply_time">{reply.time}</span>
            </div>
        </div>
    );
}