interface ServiceMenuItem {
  title: string;
  iconUrl: string;
  link: string;
}

const BasePath = process.env.NEXT_PUBLIC_GOOGLE_BUCKET + '/icon-asset';

export const serviceMenuItems: ServiceMenuItem[] = [
  {
    title: '쇼핑하기',
    iconUrl: `${BasePath}/167198007152582471.png`,
    link: `/`,
  },
  {
    title: '오!세일',
    iconUrl: `${BasePath}/167198009533480922.png`,
    link: `/`,
  },
  {
    title: '오늘의딜',
    iconUrl: `${BasePath}/167198010271968429.png`,
    link: `/`,
  },
  {
    title: '취향의발견',
    iconUrl: `${BasePath}/167198012024333402.png`,
    link: `/`,
  },
  {
    title: '장보기',
    iconUrl: `${BasePath}/167198021046015480.png`,
    link: `/`,
  },
  {
    title: '집들이',
    iconUrl: `${BasePath}/167198022841390557.png`,
    link: `/`,
  },
  {
    title: '꿀잼시리즈',
    iconUrl: `${BasePath}/167262690767101882.png`,
    link: `/`,
  },
  {
    title: '빠른배송',
    iconUrl: `${BasePath}/167505411234148010.png`,
    link: `/`,
  },
  {
    title: '쉬운이사',
    iconUrl: `${BasePath}/168661846720664430.png`,
    link: `/`,
  },
  {
    title: '리모델링',
    iconUrl: `${BasePath}/167198021046015480.png`,
    link: `/`,
  },
];
