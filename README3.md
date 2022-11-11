## add CSP

install package nan

```bash
yarn add nanoid
```

create custom document 

```bash
touch pages/_document.tsx
```

add nonce utils

replace code

update _app.tsx
//  Disable static optimization to always server render, making nonce unique on every request

update package.json

```bash
    "dev": "set \"INLINE_RUNTIME_CHUNK=false\" && next dev",
```