## Steps to reproduce

```sh
❯ pnpm i
Scope: all 3 workspace projects
Lockfile is up-to-date, resolution step is skipped
Packages: +4
++++
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /home/cjols/.local/share/pnpm/store/v3
  Virtual store is at:             node_modules/.pnpm

dependencies:
+ @sinclair/typebox 0.23.5

Progress: resolved 4, reused 4, downloaded 0, added 4, done

❯ cd packages/models && pnpm run build

> tsc -p tsconfig.json


❯ cd ../foo-utils && pnpm run build

> tsc -p tsconfig.json

src/index.ts:13:14 - error TS2742: The inferred type of 'getIds' cannot be named without a reference to 'packages/models/node_modules/@sinclair/typebox/typebox'. This is likely not portable. A type annotation is necessary.

13 export const getIds = (foos: FooList) => foos.map(getId);
                ~~~~~~


Found 1 error in src/index.ts:13

 ELIFECYCLE  Command failed with exit code 1.
```

```

```
