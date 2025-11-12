import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getAllPosts } from '@/lib/blog';
import { BlogCard, BlogPost } from '@/components/BlogCard';
import { Footer } from '@/components/Footer';

interface BlogIndexProps {
  posts: BlogPost[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <>
      <Head>
        <title>Blog - Dune Weaver</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Read the latest updates, tutorials, and insights from the Dune Weaver community." />
      </Head>

      <main className="min-h-screen bg-sand-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-sand-800 hover:text-sand-600 transition-colors">
              Dune Weaver
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-sand-100 to-sand-200 py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-xl text-gray-700 max-w-2xl">
              Discover tutorials, updates, and insights from the Dune Weaver community
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="container mx-auto px-6 py-16">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
