import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { Footer } from '@/components/Footer';

interface BlogPostPageProps {
  post: {
    slug: string;
    title: string;
    date: string;
    author: string;
    excerpt: string;
    image?: string;
    content: string;
  };
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <>
      <Head>
        <title>{post.title} - Dune Weaver Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={post.excerpt} />
      </Head>

      <main className="min-h-screen bg-sand-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold text-sand-800 hover:text-sand-600 transition-colors">
                Dune Weaver
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/blog" className="text-sand-700 hover:text-sand-600 transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Article */}
        <article className="container mx-auto px-6 py-16 max-w-4xl">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg prose-sand max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-gray-700 leading-relaxed mb-4" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="ml-4" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a className="text-sand-600 hover:text-sand-700 underline" {...props} />
                ),
                code: ({ node, inline, ...props }: any) =>
                  inline ? (
                    <code className="bg-sand-100 text-sand-800 px-2 py-1 rounded text-sm font-mono" {...props} />
                  ) : (
                    <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm" {...props} />
                  ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-sand-500 pl-4 italic text-gray-600 my-4" {...props} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Back to Blog Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog" className="text-sand-600 hover:text-sand-700 font-semibold">
              ← Back to all posts
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPostSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
