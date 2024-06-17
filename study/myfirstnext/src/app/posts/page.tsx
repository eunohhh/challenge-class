import Link from "next/link";

function PostPage() {
    return (
        <div>
            {Array.from({ length: 10 }).map((_, index) => (
                <Link key={index} href={`/posts/${index}`}>
                    {index}
                </Link>
            ))}
        </div>
    );
}

export default PostPage;
