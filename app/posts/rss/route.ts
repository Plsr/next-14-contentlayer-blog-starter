import siteConfig from "@/site.config";
import { Feed } from "feed";
import { allPosts } from "@/.contentlayer/generated";

export async function GET(request: Request) {
  var feed = new Feed({
    title: siteConfig.title,
    description: "description",
    id: siteConfig.url,
    feedLinks: {
      atom: siteConfig.url + "/atom",
    },
    link: siteConfig.url,
    copyright: `${new Date().getFullYear} ${siteConfig.title}`,
    language: "en",
    updated: new Date(),
    ttl: 60,
  });

  allPosts.map((post) => {
    /* loop over data and add to feed */
    feed.addItem({
      title: post.title,
      description: post.metaDescription || post.body.raw.slice(0, 200),
      link: `${siteConfig.url}/posts/${post.slug}`,
      date: new Date(post.date),
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, s-maxage=600, stale-while-revalidate=1800",
    },
  });
}
