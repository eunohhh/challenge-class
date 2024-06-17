import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>이것이 홈페이지</p>
            <Link href="/posts">포스트페이지로 가기</Link>
        </main>
    );
}
