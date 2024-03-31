import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Prose } from "./Prose";
import Link from "next/link";

export function PostCard(post: Post) {
  return (
    <div className="mb-32">
      <h2 className="mb-1">
        <Link
          href={`/posts/${post.slug}`}
          className="font-bold text-2xl md:text-3xl no-underline hover:text-accent-400 transition"
        >
          {post.title}
        </Link>
      </h2>
      <time
        dateTime={post.date}
        className="mb-8 block text-sm text-base-400 dark:text-base-600"
      >
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <Prose>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </Prose>
    </div>
  );
}
