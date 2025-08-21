import React, { useEffect } from 'react'
import posts from '../data/posts'
import { Calendar, Clock, CheckCircle } from 'lucide-react'
import { Card, CardBody } from '../components/ui/Card'
import Button from '../components/ui/Button'
import ScrollAnimation from '../components/utils/ScrollAnimation'
import { useLanguage } from '../contexts/LanguageContext'

const Blog: React.FC = () => {
  const { t } = useLanguage()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])


  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-modern">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation animation="fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-950">
                {t('blog.title', 'All Blog Articles')}
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-8" />
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={300}>
              <p className="text-xl text-gray-600 mb-6">
                {t('blog.subtitle', 'Explore all our latest insights on negotiation, strategy, and value creation.')}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollAnimation key={i} animation="slide-up" delay={i * 100}>
                <Card hover className="flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardBody className="flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{post.date}</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-navy-950">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    </div>
                    <div className="mt-auto">
                      <Button
                        variant="outline"
                        href={`/blog/${post.slug}`}
                        size="sm"
                        className="mt-2"
                      >
                        {t('blog.readArticle', 'Read Article')}
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
