import React from 'react';
import Link from 'next/link';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-xl transition-shadow duration-200 cursor-pointer">
        {post.image && (
          <div className="w-full h-48 bg-sand-200 relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-sand-700 transition-colors">
              {post.title}
            </h3>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>

          <p className="text-gray-600 flex-grow line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-4 text-sand-600 font-semibold hover:text-sand-700 transition-colors">
            Read more →
          </div>
        </div>
      </div>
    </Link>
  );
};
