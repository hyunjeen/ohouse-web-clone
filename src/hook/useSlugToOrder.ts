import { DummyListItem } from "@/dummyData/menuItem.data";

const useSlugToOrder = (slug: string) => {
  const matched = DummyListItem.filter((el) => {
    return el.src === slug;
  });
  return matched[0].id;
};
