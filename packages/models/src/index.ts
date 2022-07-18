import { Type, Static } from '@sinclair/typebox';

export const Foo = Type.Object({
  id: Type.Number({
    type: 'integer',
    description: 'Unique id of the structure',
    example: 100,
  }),
});
export type Foo = Static<typeof Foo>;

export const FooList = Type.Array(Foo);
export type FooList = Static<typeof FooList>;
