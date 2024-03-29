# WIP

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

We are using [EdgeDB](https://www.edgedb.com/) database hosted on [Google Cloud kubernetes](https://console.cloud.google.com/kubernetes).

# Getting Started

## 1: run the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Learn More

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) 

## Install EdgeDB 

[Quick start](https://www.edgedb.com/docs/intro/quickstart)

## Learn More

You can check out [The Edgedb Github repo](https://github.com/edgedb/edgedb)

# 2: run db server
```bash
edgedb project init
```

```bash
edgedb project init
```

# 3: create typescript code
```bash
npx @edgedb/generate edgeql-js
```


## Explore using EdgeDB UI

```bash
edgedb ui
```

## Create Production Database 

Create SQL using Kubernetes. Test Data cost 0.01 per day. 

It easier to use both Google Cloud Console & CLI & VS Code Extension.  Check your enabled services and use commands in VS Code.

[EdgeDB Guide to Google Cloud Development](https://www.edgedb.com/docs/guides/deployment/gcp)

## Add data to production

```bash
edgedb -I gcp_instance
```

```bash
insert BlogPost {
  title := “Postgres DB on GCloud”,
  content := “My first Postgres DB on GCloud, Yeah!”
};
```

## Deploy on Vercel

WIP

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

We are going with a reverse development.  Inital development will fail. Create ENV with your Kubernetes. Add script to package.json 

```bash
    "prebuild": "npx @edgedb/generate edgeql-js"
```

## Learn more

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


