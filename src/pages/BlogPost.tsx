// src/pages/BlogPost.tsx
import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import posts, { Post } from '../data/posts'
import { Calendar, Clock, Tag } from 'lucide-react'
import Button from '../components/ui/Button'
import { useLanguage } from '../contexts/LanguageContext'

const BlogPost: React.FC = () => {
  const { t } = useLanguage()
  const { slug } = useParams<{ slug: string }>()
  const post: Post | undefined = posts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />


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
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-8 border border-blue-200">
              <Tag className="w-5 h-5 text-blue-600" />
              <span className="text-navy-950 text-sm font-medium">{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy-950 leading-tight">{post.title}</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-8" />
            
            <div className="flex items-center justify-center space-x-8 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container max-w-4xl relative z-10">
          <div className="card-premium p-8 md:p-12 mb-12">
            <div className="relative mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full rounded-xl shadow-xl hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </div>
            
            <div
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
          
          <div className="text-center">
            <Button 
              href="/blog" 
              variant="primary" 
              size="lg"
              className="shadow-xl hover:shadow-blue-500/25 transform hover:scale-105"
            >
              ← {t('blog.back', 'Back to Blog')}
            </Button>
          </div>
        </div>
    </div>
  )
}

export default BlogPost
