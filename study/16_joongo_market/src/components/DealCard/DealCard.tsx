import { TDeal } from "@/types/Deal.types";
import Image from "next/image";

interface DealCardProps {
    deal: TDeal;
}

function DealCard({ deal }: DealCardProps) {
    const { title, price, imageURL, likesCount, location } = deal;

    return (
        <>
            <div className="relative aspect-[4/3]">
                <Image
                    className="object-cover"
                    alt={title}
                    src={imageURL}
                    fill
                    sizes="(min-width: 640px) 640px, 100vw"
                    priority
                />
            </div>
            <h6>{title}</h6>
            <p>{price}</p>
            <p>{location}</p>
            <p>{likesCount}</p>
        </>
    );
}

export default DealCard;
