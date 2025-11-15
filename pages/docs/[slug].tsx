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
import { useState } from 'react';

interface DocPageProps {
  document: Document;
}

const CodeBlock = ({ children, className }: { children: string; className?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group">
      <pre className="bg-theme-surface p-4 rounded-lg overflow-x-auto text-sm my-4">
        <code className={`text-theme-text-primary font-mono ${className || ''}`}>
          {children}
        </code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-theme-border-sand-strong hover:bg-sand-700 text-theme-text-inverse opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default function DocPage({ document }: DocPageProps) {
  return (
    <>
      <Head>
        <title>{document.metadata.title} - Dune Weaver Documentation</title>
        <meta name="description" content={document.metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className="min-h-screen bg-theme-background">

      {/* Content */}
      <Section background="white">
         <div className="mb-6 my-8">
            <Button href="/docs" variant="outline">
              ← Back to Documentation
            </Button>
          </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="inline-block py-1 text-theme-text-muted rounded-full text-xs font-medium">
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
        <article className="prose prose-lg prose-gray max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Custom styling for markdown elements
              h1: ({ node, ...props }) => (
                <h1 className="text-4xl font-bold text-theme-text-primary mt-8 mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-3xl font-bold text-theme-text-primary mt-8 mb-4" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-2xl font-bold text-theme-text-primary mt-6 mb-3" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="text-xl font-bold text-theme-text-primary mt-4 mb-2" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="text-theme-text-secondary mb-4 leading-relaxed" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a
                  className="text-sand-600 hover:text-sand-800 underline"
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside mb-4 space-y-2 text-theme-text-secondary" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside mb-4 space-y-2 text-theme-text-secondary" {...props} />
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
              code: ({ node, className, children, ...props }: any) => {
                const isCodeBlock = className?.includes('language-');
                if (isCodeBlock) {
                  // For code blocks, we'll handle them in the pre component
                  return children;
                }
                return (
                  <code
                    className="bg-theme-surface text-theme-text-primary px-1.5 py-0.5 rounded text-sm font-mono"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              pre: ({ node, children, ...props }: any) => {
                // Extract the code content and className from children
                const codeElement = children?.props;
                const codeContent = codeElement?.children || '';
                const className = codeElement?.className || '';

                // Check if this is a fenced code block
                if (className?.includes('language-')) {
                  return <CodeBlock className={className}>{codeContent}</CodeBlock>;
                }

                // Fallback for non-fenced code blocks
                return (
                  <pre className="bg-theme-surface p-4 rounded-lg overflow-x-auto text-sm my-4" {...props}>
                    {children}
                  </pre>
                );
              },
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full divide-y divide-gray-200" {...props} />
                </div>
              ),
              thead: ({ node, ...props }) => (
                <thead className="bg-theme-background" {...props} />
              ),
              th: ({ node, ...props }) => (
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  {...props}
                />
              ),
              td: ({ node, ...props }) => (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-theme-text-secondary" {...props} />
              ),
              hr: ({ node, ...props }) => (
                <hr className="my-8 border-gray-300" {...props} />
              ),
              img: ({ node, ...props }) => (
                <img
                  className="max-w-full h-auto my-4 rounded-lg"
                  {...props}
                />
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
          <Button href="/docs" variant="outline">
            ← Back to Documentation
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
