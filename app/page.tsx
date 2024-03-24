import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post: Post) {
  return (
    <div className="mb-32">
      <h2 className="mb-1">
        <Link
          href={post.url}
          className="font-bold text-3xl no-underline hover:text-accent-400 transition"
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
      <div
        className="prose prose-base hover:prose-a:text-accent-400 prose-pre:bg-[#011627] prose-img:rounded-md dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mx-auto max-w-xl py-8">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
