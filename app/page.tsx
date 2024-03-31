import { allSortedPosts } from "@/util/posts";
import siteConfig from "@/site.config";
import { PostsPagination } from "@/components/PostsPagination";
import { PostCard } from "@/components/PostCard";

export default function Home() {
  const posts = allSortedPosts.slice(0, siteConfig.postsPerPage);

  return (
    <div className="mx-auto max-w-xl py-8">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      <PostsPagination currentPage={1} />
    </div>
  );
}
