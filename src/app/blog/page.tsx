import { Metadata } from 'next';
import { Hero, ConsultationCTA } from '@/components/sections';
import { FadeInOnScroll } from '@/components/animations';
import { BlogPostCard } from '@/components/cards';
import { blogPosts, getRecentBlogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Legal insights and updates from Capielo Law Group. Read our articles on estate planning, trust litigation, civil appeals, and more.',
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <Hero
        title="Legal Insights"
        subtitle="Our Blog"
        description="Thoughtful analysis and practical guidance on estate planning, litigation, and the legal issues that matter to California families."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Featured Post */}
          {featuredPost && (
            <FadeInOnScroll>
              <div className="mb-12">
                <h2 className="text-sm font-medium text-accent-500 uppercase tracking-wide mb-4">
                  Featured Article
                </h2>
                <BlogPostCard post={featuredPost} variant="featured" />
              </div>
            </FadeInOnScroll>
          )}

          {/* Other Posts */}
          {otherPosts.length > 0 && (
            <div>
              <FadeInOnScroll>
                <h2 className="text-sm font-medium text-accent-500 uppercase tracking-wide mb-6">
                  Recent Articles
                </h2>
              </FadeInOnScroll>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map((post, index) => (
                  <FadeInOnScroll key={post.id} delay={index * 100}>
                    <BlogPostCard post={post} />
                  </FadeInOnScroll>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-cream-100">
        <div className="container-custom">
          <FadeInOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-3 text-primary mb-4">
                Stay Informed
              </h2>
              <p className="text-text-muted mb-6">
                Subscribe to receive our latest articles and legal updates directly
                to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-cream-300 bg-white text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-xs text-text-light">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <ConsultationCTA variant="light" />
    </>
  );
}
