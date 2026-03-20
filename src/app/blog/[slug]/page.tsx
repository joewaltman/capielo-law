import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ConsultationCTA } from '@/components/sections';
import { FadeInOnScroll } from '@/components/animations';
import { BlogPostCard } from '@/components/cards';
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* Article Header */}
      <section className="bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 py-20 md:py-28">
        <div className="container-custom">
          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm text-accent-500 hover:text-accent-600 mb-6"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Blog
              </Link>

              <div className="flex items-center gap-3 text-sm text-text-muted mb-4">
                <span className="font-medium text-accent-500">{post.category}</span>
                <span>·</span>
                <span>{formatDate(post.publishedAt)}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="heading-1 text-primary">{post.title}</h1>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-cream-300 flex items-center justify-center text-cream-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-primary">{post.author}</p>
                  <p className="text-sm text-text-muted">Capielo Law Group LLP</p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeInOnScroll>
            <article className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg prose-headings:font-display prose-headings:text-primary prose-a:text-accent-500 hover:prose-a:text-accent-600 prose-strong:text-primary max-w-none"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />
            </article>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Author Box */}
      <section className="py-12 bg-cream-50">
        <div className="container-custom">
          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-6 md:p-8 border border-cream-200 flex flex-col md:flex-row items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-cream-200 flex-shrink-0 flex items-center justify-center text-cream-400">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">Written by</p>
                  <h3 className="font-display text-xl font-semibold text-primary">
                    {post.author}
                  </h3>
                  <p className="mt-2 text-text-muted">
                    {post.author === 'Georg Capielo'
                      ? 'Georg is the founding partner of Capielo Law Group with over twenty years of experience in trust and estate matters.'
                      : 'Katie is a partner at Capielo Law Group specializing in trust and estate litigation and civil appeals.'}
                  </p>
                  <Link
                    href={`/attorneys/${post.author.toLowerCase().replace(' ', '-')}`}
                    className="inline-flex items-center text-accent-500 hover:text-accent-600 text-sm font-medium mt-3"
                  >
                    View Full Profile
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <FadeInOnScroll>
              <h2 className="heading-3 text-primary text-center mb-8">
                Related Articles
              </h2>
            </FadeInOnScroll>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <FadeInOnScroll key={relatedPost.id} delay={index * 100}>
                  <BlogPostCard post={relatedPost} />
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      <ConsultationCTA />
    </>
  );
}

function formatContent(content: string): string {
  // Convert markdown-style headers and paragraphs to HTML
  return content
    .split('\n\n')
    .map((block) => {
      block = block.trim();
      if (!block) return '';

      // Headers
      if (block.startsWith('## ')) {
        return `<h2>${block.slice(3)}</h2>`;
      }
      if (block.startsWith('### ')) {
        return `<h3>${block.slice(4)}</h3>`;
      }

      // Lists
      if (block.includes('\n- ')) {
        const items = block.split('\n- ').filter(Boolean);
        const firstItem = items[0].startsWith('- ') ? items[0].slice(2) : items[0];
        return `<ul><li>${[firstItem, ...items.slice(1)].join('</li><li>')}</li></ul>`;
      }

      // Numbered lists
      if (/^\d+\./.test(block)) {
        const items = block.split(/\n\d+\.\s+/).filter(Boolean);
        return `<ol><li>${items.join('</li><li>')}</li></ol>`;
      }

      // Regular paragraphs
      return `<p>${block}</p>`;
    })
    .join('\n');
}
