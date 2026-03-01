import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { BLOG_POSTS } from '@/data/blogs';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { generateArticleSchema } from '@/utils/structured-data';

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <>
        <SEOHead
          title="Post Not Found"
          description="The blog post you're looking for doesn't exist."
          noindex={true}
        />
        <Layout>
        <section className="container-custom section-py text-center">
          <h1 className="text-3xl font-bold text-brand-text mb-4">Post Not Found</h1>
          <p className="text-brand-text-soft mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Back to Blog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
        </Layout>
      </>
    );
  }

  const relatedPosts = BLOG_POSTS.filter(
    p => p.category === post.category && p.id !== post.id
  ).slice(0, 3);

  const structuredData = generateArticleSchema(
    post.title,
    post.excerpt,
    post.imageUrl || 'https://operateforyou.com/logo.png',
    'OperateForYou',
    post.date,
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={post.category + ', ' + post.title}
        ogImage={post.imageUrl}
        publishDate={post.date}
        structuredData={structuredData}
      />
      <Layout>
      {/* Hero */}
      <section className="bg-brand-bg">
        <div className="container-custom section-py">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-brand-accent text-white text-sm font-bold rounded-full mb-6">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm text-brand-text-soft">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-brand-bg pb-0">
        <div className="container-custom">
          <div className="rounded-xl overflow-hidden shadow-lg max-w-3xl">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container-custom section-py">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-brand-text-soft">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)?.[0].length || 1;
                const text = paragraph.replace(/^#+\s*/, '');
                const headingClass = {
                  1: 'text-3xl font-bold text-brand-text mt-8 mb-4',
                  2: 'text-2xl font-bold text-brand-text mt-6 mb-3',
                  3: 'text-xl font-bold text-brand-text mt-5 mb-2',
                }[level] || 'text-lg font-bold text-brand-text mt-4 mb-2';
                return (
                  <h2 key={idx} className={headingClass}>
                    {text}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i} className="text-brand-text-soft">
                        {item.replace(/^[-*]\s*/, '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="text-brand-text-soft leading-relaxed my-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Keywords */}
          {post.keywords.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-brand-text mb-4">Keywords</h3>
              <div className="flex flex-wrap gap-3">
                {post.keywords.map(keyword => (
                  <span
                    key={keyword}
                    className="inline-block px-4 py-2 bg-gray-100 text-brand-text text-sm rounded-full hover:bg-brand-accent hover:text-white transition-colors"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-brand-bg">
          <div className="container-custom section-py">
            <h2 className="text-3xl font-bold text-brand-text mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="dynamic-glow bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group"
                >
                  <div className="relative overflow-hidden h-48 bg-gray-200">
                    <img
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold text-brand-accent mb-2 uppercase tracking-wide">
                      {relatedPost.category}
                    </p>
                    <h3 className="text-lg font-bold text-brand-text mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-brand-text-soft line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container-custom section-py text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
          Interested in Our Services?
        </h2>
        <p className="text-xl text-brand-text-soft mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help your business implement these strategies
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-lg hover:bg-blue-700 transition-all font-medium hover:shadow-lg"
        >
          Get In Touch
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
      </Layout>
    </>
  );
}
