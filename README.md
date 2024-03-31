# Next.js 14 & Contentlayer Blog starter

> [!WARNING]  
> This is still work in progress and not ready to be used

A simple starter for a blog using Next.js 14 and Contentlayer. This starter aims to be used in one of two ways:

1. A quick starter to enable writing with minimal configuration
2. A base-layer for people wanting to build their own blog with more features

## Features

### Markdown files managed with Contentlayer

This starter uses [Contentlayer](https://contentlayer.dev) to manage markdown files. This makes it easy to add metadata to the existing resources or add completely new types of content. All content lives in the `content` folder, starting with `posts` and `pages`.

### Tailwind CSS

Styling via Tailwind CSS. I know it's not for everyone, so this propbably also makes this starter not for everyone.

### Dark mode

Dark mode is supported out of the box. The starter uses the system preference by default but allows manual overrides.

### Pagination
This starter offers a high-perfomant, server-side pagination.

## Configuration
If you want to quickly start writing, this starter makes it easy to configure some base settings and visuals.

### Base Settings
The sites base settings can be adapted at `site.config.js`. The config object offers the following options:

  |name|type|description|
  |-----|----|------------|
  |title|string|Name of the page, used e.g. in `<title>` and other metadata.|
  |url|string|Production URL of the page|
  |postsPerPage|number|The number of posts per page to display|

### Visual
You have some control over the visuals of the page by adapting the `tailwind.config.ts` file. We export to custom colors, `base` and `accent`, which you can map to any basic tailwind color:

```ts
const config: Config = {
  //...
  theme: {
    colors: {
      ...colors,
      accent: colors.emerald,
      base: colors.slate,
    },
  },
  // ...
};
export default config;
```

## Todo

### Now

- [x] Post styling
  - [x] code blocks
- [x] Post page
- [x] Metadata for posts
  - [x] including OG
- [x] Pages
  - [x] Metadata
- [x] RSS feed
- [x] Mobile
- [x] Pagination
- [x] Footer

### Later

- [ ] Header
  - [x] Header needs to follow new styling conventions
  - [x] Better styling for buttons
  - [ ] Link active state
- [ ] Default OG Image for non-post pages
- [ ] Home page
  - [ ] make configurable wether to display full posts or list of posts on home page
