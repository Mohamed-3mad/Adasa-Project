import { Link } from 'react-router-dom'
import FaIcon from './FaIcon'

export default function BlogCard({ post }) {
  const date = new Date(post.date).toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <article className="card group flex flex-col cursor-pointer">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <span className="text-xs bg-black text-white px-2.5 py-1 rounded-full font-medium">
            {post.category}
          </span>
          
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
          <span className="flex items-center gap-1">
            <FaIcon name="calendar" />
            {date}
          </span>
          <span className="w-1 h-1 rounded-full bg-ink-600"></span>
          <span className="flex items-center gap-1">
            <FaIcon name="clock" />
            {post.readTime}
          </span>
        </div>
        <h3 className="font-bold text-lg leading-snug mb-2 line-clamp-2 group-hover:text-brand transition">
          <Link to={'/blog/' + post.id}>{post.title}</Link>
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-ink-800">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover border border-ink-700"
            />
            <div className="leading-tight">
              <div className="text-xs font-medium">{post.author.name}</div>
              <div className="text-[10px] text-gray-500">{post.author.role}</div>
            </div>
          </div>
          <Link
            to={'/blog/' + post.id}
            className="w-8 h-8 rounded-full bg-ink-800 border border-brand/40 group-hover:bg-brand flex items-center justify-center transition"
            aria-label="اقرأ المزيد"
          >
            <FaIcon name="angleLeft" className="text-xs text-brand group-hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </article>
  )
}
