// src/components/sections/Blog.tsx
import React from 'react'
import { Calendar, Clock } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { Card, CardBody } from '../ui/Card'
import ScrollAnimation from '../utils/ScrollAnimation'
import Button from '../ui/Button'
import posts from '../../data/posts'

const BlogSection: React.FC = () => {
  const previewPosts = posts.slice(0, 3)

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="Blog & Academy"
          subtitle="Stay informed with DNego's expert insights. Our blog offers practical articles and tips on negotiation and value creation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewPosts.map((post, i) => (
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
                      Read Article
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="primary" href="/blog">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
