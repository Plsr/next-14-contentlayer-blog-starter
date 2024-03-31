import siteConfig from "@/site.config";
import { allSortedPosts } from "@/util/posts";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

type PostsPaginationProps = {
  currentPage: number;
};

export const PostsPagination = ({ currentPage }: PostsPaginationProps) => {
  const totalPages = Math.ceil(allSortedPosts.length / siteConfig.postsPerPage);
  const previousPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? +currentPage + 1 : null;

  const previousPageLink =
    previousPage === 1 ? "/" : `/posts/page/${previousPage}`;

  return (
    <div className="flex justify-between items-center">
      {previousPage && (
        <Link
          className="mr-auto flex items-center gap-2 py-2 px-4 transition rounded-lg dark:hover:bg-base-900 hover:bg-base-200"
          href={previousPageLink}
        >
          <ArrowLeft className="h-4 w-4" />
          Newer Posts
        </Link>
      )}
      {nextPage && (
        <Link
          className="ml-auto flex items-center gap-2 py-2 px-4 transition rounded-lg dark:hover:bg-base-900 hover:bg-base-200"
          href={`/posts/page/${nextPage}`}
        >
          Older Posts
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
};
