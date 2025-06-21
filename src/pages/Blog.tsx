import React, { useEffect } from 'react'
import posts from '../data/posts'
import { Calendar, Clock } from 'lucide-react'
import { Card, CardBody } from '../components/ui/Card'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import ScrollAnimation from '../components/utils/ScrollAnimation'

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])


  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="All Blog Articles"
          subtitle="Explore all our latest insights on negotiation, strategy, and value creation."
        />

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
                      Read Article
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
