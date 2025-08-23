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
      <section className="py-20 bg-gradient-modern relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ScrollAnimation animation="fade-in">
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-8 border border-blue-200">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-navy-950 text-sm font-medium">Blog & Insights</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy-950 leading-tight">
                {t('blog.title', 'All Blog Articles')}
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={200}>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-8" />
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={300}>
              <p className="text-xl md:text-2xl text-navy-950 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
                {t('blog.subtitle', 'Explore all our latest insights on negotiation, strategy, and value creation.')}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {posts.map((post, i) => (
              <ScrollAnimation key={i} animation="slide-up" delay={i * 100}>
                <Card hover className="flex flex-col h-full card-premium group hover:shadow-floating transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <CardBody className="flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                          <Calendar className="h-4 w-4 text-white" />
                        </div>
                        <span className="mr-4">{post.date}</span>
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-2">
                          <Clock className="h-4 w-4 text-white" />
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-navy-950 group-hover:text-blue-700 transition-colors duration-300 leading-tight">{post.title}</h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4 group-hover:w-20 transition-all duration-500" />
                      <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                    </div>
                    <div className="mt-auto">
                      <Button
                        variant="primary"
                        href={`/blog/${post.slug}`}
                        size="sm"
                        className="w-full shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
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
