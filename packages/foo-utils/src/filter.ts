import { FooList } from '@powerx/models';

export const filterById = (index: FooList, ids: string[]) =>
  index.filter((x) => ids.includes(`${x.id}`));
