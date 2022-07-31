# T3 Stack으로 하는 Fullstack

T3 Stack이라는 것이 나왔습니다.(TypeScript, tRPC, TailwindCSS) Next.js로 풀스택을 하고 싶었는데, 해볼 수 있는 기회가 생겼네요

## 기본 폴더 구조

### `src/server`
```
├── db
│   └── client.ts
├── env-schema.js
├── env.js
└── router
    ├── context.ts
    ├── feedback.ts
    └── index.ts
```

- `db`
  - `client.ts`: `@prisma/client` 설정 파일입니다.
- `router`
  - `context.ts`: `createContext`와 `createRouter`를 만드는 파일입니다.
  - `feedback.ts`: `feedback` 자원에 관한 파일입니다. `prisma`를 이용해서 DB에 접근해서 값을 읽어오고, 데이터를 만들고 수정합니다.
  - `index.ts`: 여러가지 자원에 관한 파일들을 합쳐줍니다.
