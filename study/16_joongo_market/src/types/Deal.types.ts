export type TDeal<IsDetail extends boolean = false> = {
    id: number;
    title: string;
    price: number;
    imageURL: string;
    likesCount: number;
    location: string;
} & (IsDetail extends true
    ? {
          seller: {
              email: string;
              profileImageURL: string;
          };

          createdAt: number;
          content: string;
          viewsCount: number;
      }
    : {});
