import Page from "@/components/Page";
import { TDeal } from "@/types/Deal.types";
import Image from "next/image";

const deal: TDeal<true> = {
    id: 1111,
    title: "춘향골 만 원 한 박스 판매함",
    imageURL:
        "https://dnvefa72aowie.cloudfront.net/origin/article/202406/0c3fc4e63d2251a9348b80ddd5a087918089f7b02ec374e49cf9c87a4461fde9_0.webp?f=webp&q=95&s=1440x1440&t=inside",
    location: "서울 강동구 명일제2동",
    price: 9000,
    likesCount: 54,

    seller: {
        profileImageURL:
            "https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png",
        email: "blabla@sparta.com",
    },
    content: "맛도 좋아 영양도 좋아 춘향골 복숭아, 물복 딱복 다 있습니다.",
    createdAt: 1719388055073,
    viewsCount: 23212,
};

function DealDetailPage() {
    return (
        <Page title={deal.title} isTitleHidden>
            <div className="relative aspect-[4/3]">
                <Image
                    className="object-cover"
                    alt={deal.title}
                    src={deal.imageURL}
                    fill
                    sizes="(min-width: 640px) 640px, 100vw"
                    priority
                    // unoptimized
                />
            </div>
            <p>{deal.seller?.email}</p>
            <p>{deal.createdAt}</p>

            <p>{deal.price}</p>

            <p>{deal.content}</p>
            <h2>{deal.title}</h2>

            <p>{deal.location}</p>

            <p>{deal.viewsCount}</p>
            <p>{deal.likesCount}</p>
        </Page>
    );
}

export default DealDetailPage;
