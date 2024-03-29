# Next.js 14 & Contentlayer Blog starter

> [!WARNING]  
> This is still work in progress and not ready to be used

A simple starter for a blog using Next.js 14 and Contentlayer. This starter aims to be used in one of two ways:

1. A quick starter to enable wirting with minimal configuration
2. A base-layer for people wanting to build their own blog with more features

## Features

### Markdown files managed with Contentlayer

This starter uses [Contentlayer](https://contentlayer.dev) to manage markdown files. This makes it easy to add metadata to the existing `posts` or
add completely new types of content.

### Tailwind CSS

Styling via Tailwind CSS. I know it's not for everyone, so this propbably also makes this starter not for everyone.

### Dark mode

Dark mode is supported out of the box. The starter uses the system preference by default but allows manual overrides.

## Todo

### Now

- [x] Post styling
  - [x] code blocks
- [x] Post page
- [x] Metadata for posts
  - [x] including OG
- [ ] Pages
  - [ ] Metadata
- [ ] RSS feed
- [ ] Mobile
- [ ] Pagination
- [ ] Footer

### Later

- [ ] Header
  - [x] Header needs to follow new styling conventions
  - [x] Better styling for buttons
  - [ ] Link active state
- [ ] Home page
  - [ ] make configurable wether to display full posts or list of posts on home page
