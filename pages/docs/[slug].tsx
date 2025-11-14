import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getDocumentBySlug, getDocumentSlugs, Document } from '@/lib/docs';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface DocPageProps {
  document: Document;
}

export default function DocPage({ document }: DocPageProps) {
  return (
    <>
      <Head>
        <title>{document.metadata.title} - Dune Weaver Documentation</title>
        <meta name="description" content={document.metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Section background="white">
        <div className="py-8">
          <div className="mb-6">
            <Button href="/docs" variant="outline">
              ← Back to Documentation
            </Button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {document.metadata.title}
          </h1>

          {document.metadata.description && (
            <p className="text-xl text-gray-600 mb-4">
              {document.metadata.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="inline-block px-3 py-1 bg-sand-100 text-sand-800 rounded-full text-xs font-medium">
              {document.metadata.tableType}
            </span>

            {document.metadata.date && (
              <span>
                {new Date(document.metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            )}
          </div>
        </div>
      </Section>

      {/* Content */}
      <Section background="white">
        <article className="prose prose-lg prose-gray max-w-none py-12">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Custom styling for markdown elements
              h1: ({ node, ...props }) => (
                <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="text-gray-700 mb-4 leading-relaxed" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a
                  className="text-sand-600 hover:text-sand-800 underline"
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="ml-4" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-sand-500 pl-4 italic text-gray-600 my-4"
                  {...props}
                />
              ),
              code: ({ node, inline, ...props }: any) =>
                inline ? (
                  <code
                    className="bg-gray-100 text-sand-800 px-2 py-1 rounded text-sm font-mono"
                    {...props}
                  />
                ) : (
                  <code
                    className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4"
                    {...props}
                  />
                ),
              pre: ({ node, ...props }) => (
                <pre className="my-4" {...props} />
              ),
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full divide-y divide-gray-200" {...props} />
                </div>
              ),
              thead: ({ node, ...props }) => (
                <thead className="bg-gray-50" {...props} />
              ),
              th: ({ node, ...props }) => (
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  {...props}
                />
              ),
              td: ({ node, ...props }) => (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" {...props} />
              ),
              hr: ({ node, ...props }) => (
                <hr className="my-8 border-gray-300" {...props} />
              ),
            }}
          >
            {document.content}
          </ReactMarkdown>
        </article>
      </Section>

      {/* Footer Navigation */}
      <Section background="gray">
        <div className="py-8 text-center">
          <Button href="/docs" variant="primary">
            Back to Documentation
          </Button>
        </div>
      </Section>
      </div>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getDocumentSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const document = getDocumentBySlug(slug);

  if (!document) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      document,
    },
  };
};
