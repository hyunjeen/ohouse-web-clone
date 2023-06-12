export type CurMenuOrderProps = {
  curMainMenuOrder: number;
  curSubMenuOrder: number;
};

export type MainOrderProp = Omit<CurMenuOrderProps, 'curSubMenuOrder'>;
export type SubOrderProp = Omit<CurMenuOrderProps, 'curMainMenuOrder'>;
