import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/blogs';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { SEO_CONFIG } from '@/config/seo';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? BLOG_POSTS.filter(post => post.category === selectedCategory)
    : BLOG_POSTS;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const seoConfig = SEO_CONFIG.pages.blog;

  return (
    <>
      <SEOHead
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
      />
      <Layout>
      {/* Hero */}
      <section className="bg-brand-bg pt-20 pb-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
            Blog & Insights
          </h1>
          <p className="text-xl text-brand-text-soft max-w-2xl">
            Expert tips, industry insights, and business strategies to help you succeed.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container-custom py-12">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-medium border-2 transition-all ${
              selectedCategory === null
                ? 'bg-brand-primary text-white border-brand-primary shadow-md hover:bg-blue-700 hover:border-blue-700'
                : 'bg-gray-100 text-brand-text border-gray-300 hover:bg-gray-200 hover:border-gray-400'
            }`}
          >
            All Posts
          </button>
          {BLOG_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium border-2 transition-all ${
                selectedCategory === category
                  ? 'bg-brand-primary text-white border-brand-primary shadow-md hover:bg-blue-700 hover:border-blue-700'
                  : 'bg-gray-100 text-brand-text border-gray-300 hover:bg-gray-200 hover:border-gray-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container-custom pb-24">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="dynamic-glow bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="relative overflow-hidden h-48 bg-gray-200">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-brand-accent text-white text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-text mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-brand-text-soft mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-brand-text-soft mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <div className="text-brand-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-brand-text-soft mb-4">
              No posts found in this category.
            </p>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-brand-primary font-semibold border-2 border-brand-primary px-6 py-2 rounded-lg hover:bg-brand-primary hover:text-white transition-colors"
            >
              View all posts
            </button>
          </div>
        )}
      </section>
      </Layout>
    </>
  );
}
