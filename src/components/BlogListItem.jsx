import { Link } from 'react-router-dom'
import FaIcon from './FaIcon'

export default function BlogListItem({ post }) {
  const date = new Date(post.date).toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <article className="card group flex flex-col md:flex-row overflow-hidden">
      <div className="md:w-72 lg:w-80 shrink-0 relative aspect-[16/10] md:aspect-auto overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
          <span className=" text-xs bg-brand/10 text-brand border border-brand-dark/30 px-2.5 py-1 rounded-full font-medium">
          {post.category}
        </span>
          <span className="flex items-center gap-1">
            <FaIcon name="calendar" />
            {date}
          </span>
          <span className="w-1 h-1 rounded-full bg-ink-600"></span>
          <span className="flex items-center gap-1">
            <FaIcon name="clock" />
            {post.readTime}
          </span>
          {post.featured && (
            <span className="text-brand flex items-center gap-1">
              <FaIcon name="star" className="text-[10px]" /> مميز
            </span>
          )}
        </div>
        <h3 className="font-bold text-xl leading-snug mb-2 group-hover:text-brand transition">
          <Link to={'/blog/' + post.id}>{post.title}</Link>
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-ink-800">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-9 h-9 rounded-full object-cover border border-ink-700"
            />
            <div className="leading-tight">
              <div className="text-sm font-medium">{post.author.name}</div>
              <div className="text-[11px] text-gray-500">{post.author.role}</div>
            </div>
          </div>
          <Link
            to={'/blog/' + post.id}
            className="text-brand text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
          >
            اقرأ المقال <FaIcon name="arrowLeft" className="text-xs" />
          </Link>
        </div>
      </div>
    </article>
  )
}
