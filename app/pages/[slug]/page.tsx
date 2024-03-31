import { format, parseISO } from "date-fns";
import { allPages } from "contentlayer/generated";
import { Prose } from "@/components/Prose";
import { Metadata } from "next";
import siteConfig from "@/site.config";

export const generateStaticParams = async () =>
  allPages.map((page) => ({ slug: page.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const page = allPages.find((page) => page.slug === params.slug);
  if (!page) throw new Error(`Page not found for slug: ${params.slug}`);

  const description = page.metaDescription || page.body.raw.slice(0, 200);

  return {
    title: `${page.title} | ${siteConfig.title}`,
    description,
    openGraph: {
      title: page.title,
      description,
      type: "website",
    },
  } as Metadata;
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const page = allPages.find((page) => page.slug === params.slug);
  if (!page) throw new Error(`Page not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{page.title}</h1>
        {page.updatedAt && (
          <time
            dateTime={page.updatedAt}
            className="mb-1 text-xs text-gray-600"
          >
            Last updated: {format(parseISO(page.updatedAt), "LLLL d, yyyy")}
          </time>
        )}
      </div>
      <Prose>
        <div dangerouslySetInnerHTML={{ __html: page.body.html }} />
      </Prose>
    </article>
  );
};

export default PostLayout;
