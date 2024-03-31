import { PostCard } from "@/app/page";
import { PostsPagination } from "@/components/PostsPagination";
import siteConfig from "@/site.config";
import { allSortedPosts } from "@/util/posts";
import { Metadata } from "next";

export const generateMetadata = ({ params }: { params: { page: number } }) => {
  return {
    title: `Posts - Page ${params.page} | ${siteConfig.title}`,
    description: `Page ${params.page} of all posts on ${siteConfig.title}`,
    openGraph: {
      title: `Posts - Page ${params.page} | ${siteConfig.title}`,
      description: `Page ${params.page} of all posts on ${siteConfig.title}`,
      type: "website",
    },
  } as Metadata;
};

const PaginatedPostsPage = ({ params }: { params: { page: number } }) => {
  const sliceStart = (params.page - 1) * siteConfig.postsPerPage;
  const sliceEnd = params.page * siteConfig.postsPerPage;

  const postsForPage = allSortedPosts.slice(sliceStart, sliceEnd);

  return (
    <div className="mx-auto max-w-xl py-8">
      {postsForPage.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      <PostsPagination currentPage={params.page} />
    </div>
  );
};

export default PaginatedPostsPage;
