interface ServiceMenuItem {
  title: string;
  iconUrl: string;
  link: string;
}

const BasePath = process.env.NEXT_PUBLIC_GOOGLE_BUCKET + "/service_menu";

export const serviceMenuItems: ServiceMenuItem[] = [
  {
    title: "쇼핑하기",
    iconUrl: `${BasePath}/cart.png`,
    link: `/`,
  },
  {
    title: "오!세일",
    iconUrl: `${BasePath}/discount.png`,
    link: `/`,
  },
  {
    title: "오늘의딜",
    iconUrl: `${BasePath}/deal.png`,
    link: `/`,
  },
  {
    title: "취향의발견",
    iconUrl: `${BasePath}/favorite.png`,
    link: `/`,
  },
  {
    title: "장보기",
    iconUrl: `${BasePath}/shopping.png`,
    link: `/`,
  },
  {
    title: "집들이",
    iconUrl: `${BasePath}/houses.png`,
    link: `/`,
  },
  {
    title: "꿀잼시리즈",
    iconUrl: `${BasePath}/playing.png`,
    link: `/`,
  },
  {
    title: "빠른배송",
    iconUrl: `${BasePath}/delivery.png`,
    link: `/`,
  },
  {
    title: "쉬운이사",
    iconUrl: `${BasePath}/moving.png`,
    link: `/`,
  },
  {
    title: "리모델링",
    iconUrl: `${BasePath}/remodel.png`,
    link: `/`,
  },
];
