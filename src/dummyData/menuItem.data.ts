interface Item {
  id: number;
  src: string;
  title: string;
}

interface ItemState extends Item {
  sub: Item[];
}

export type DummyListItems = Omit<ItemState, 'src'>;
export type MainDummyListItems = Omit<Item, 'sub'>;

export const DummyListItem: DummyListItems[] = [
  {
    id: 0,
    title: '커뮤니티',
    sub: [
      { id: 0, src: '/', title: '홈' },
      { id: 1, src: '/topics/recommend', title: '추천' },
      { id: 2, src: '/projects', title: '집들이' },
      { id: 3, src: '/card_collections', title: '집사진' },
    ],
  }, //
  {
    id: 1,
    title: '쇼핑',
    sub: [
      { id: 0, src: '/store', title: '쇼핑홈' },
      { id: 1, src: '/asf', title: '카테고리' },
      { id: 2, src: '/asf', title: '베스트' },
      { id: 3, src: '/', title: '오늘의딜' },
    ],
  },
  {
    id: 2,
    title: '이사/시공/수리',
    sub: [{ id: 0, src: '/experts', title: '홈' }],
  },
];
