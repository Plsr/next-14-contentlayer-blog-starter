// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import { Pluggable } from "unified";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    metaDescription: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (page) => page._raw.sourceFileName.replace(/\.md$/, ""),
    },
  },
}));

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/*.md`,
  fields: {
    title: { type: "string", required: true },
    updatedAt: { type: "date", required: false },
    metaDescription: { type: "string", required: false },
    showInHeader: { type: "boolean", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (page) => `/${page._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (page) => page._raw.sourceFileName.replace(/\.md$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Page],
  markdown: { rehypePlugins: [highlight] as Pluggable[] },
});
