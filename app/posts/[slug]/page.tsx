import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Prose } from "@/components/Prose";
import { Metadata } from "next";
import siteConfig from "@/site.config";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const description = post.metaDescription || post.body.raw.slice(0, 200);

  return {
    title: `${post.title} | ${siteConfig.title}`,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "website",
    },
  } as Metadata;
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <Prose>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </Prose>
    </article>
  );
};

export default PostLayout;
