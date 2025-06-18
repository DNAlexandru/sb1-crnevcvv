// src/pages/BlogPost.tsx
import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import posts, { Post } from '../data/posts'
import { Calendar, Clock, Tag } from 'lucide-react'
import Button from '../components/ui/Button'

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post: Post | undefined = posts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <article className="container mx-auto px-4 py-16 bg-white">
      <h1 className="text-4xl font-bold text-navy-950 mb-4">{post.title}</h1>
      <div className="flex items-center space-x-6 text-gray-600 mb-8">
        <span className="flex items-center"><Calendar className="w-5 h-5 mr-1" />{post.date}</span>
        <span className="flex items-center"><Clock className="w-5 h-5 mr-1" />{post.readTime}</span>
        <span className="flex items-center"><Tag className="w-5 h-5 mr-1" />{post.category}</span>
      </div>
      <img src={post.image} alt={post.title} className="w-full rounded-lg mb-8" />
      <div className="prose prose-lg text-gray-800">
        {post.content.trim().split('\n\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="mt-12">
        <Button href="/blog" variant="outline">← Back to Blog</Button>
      </div>
    </article>
  )
}

export default BlogPost
