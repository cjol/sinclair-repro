import { Foo, FooList } from '@org/models';

export const getId = (foo: Foo) => foo.id;

export const getIdsArr = (foos: Foo[]) => foos.map(getId);

/**
 * This line causes a type error:
 *     The inferred type of 'getIds' cannot be named without a reference to
 *     'packages/models/node_modules/@sinclair/typebox/typebox'. This is likely not
 *     portable. A type annotation is necessary.ts(2742)
 */
export const getIds = (foos: FooList) => foos.map(getId);
